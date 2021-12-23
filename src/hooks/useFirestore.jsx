import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore'

export const useFirestore = (coll) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const q = query(collection(projectFireStore, coll), orderBy('timeStamp', 'desc'))

    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = []
      querySnapshot.forEach(card => {
        documents.push({ ...card.data(), id: card.id })
      })
      setDocs(documents)
    })
    return () => unsub()
  
  }, [coll])

return { docs }
}