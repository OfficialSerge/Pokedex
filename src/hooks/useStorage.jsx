import { useState, useEffect } from "react";
import { projectStorage, projectFireStore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";

export const useStorage = ({ name, type, HP, attack, defense, spAttack, spDef, speed, desc, card }) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const metadata = {
      contentType: card.type
    }
    const storageRef = ref(projectStorage, card.name)
    const uploadTask = uploadBytesResumable(storageRef, card, metadata)

    uploadTask.on('state_changed',
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)

      }, (error) => {
        setError(error)

      }, async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        const timeStamp = serverTimestamp()
        setUrl(url)
        
        // append to FireStore db
        await addDoc(collection(projectFireStore, 'Pokedex'),
          {
            name,
            type,
            HP,
            attack,
            defense,
            spAttack,
            spDef,
            speed,
            desc,
            url,
            timeStamp
          })
      })
  }, [name, type, HP, attack, defense, spAttack, spDef, speed, desc, card])

  return { progress, url, error }
}