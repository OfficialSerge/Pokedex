import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";
import { motion } from "framer-motion";

export const ProgressBar = (
  { setCard, setName, changeType, setHP, setAttack, setDefense,
    setSpAttack, setSpDef, setSpeed, setDesc, submitPok, setSubmit
  }) => {
  const { progress, url } = useStorage(submitPok)

  useEffect(() => {
    if (url) { // we got storage URL, successful POST!
      setCard(null)
      setName('')
      changeType('')
      setHP(0)
      setAttack(0)
      setDefense(0)
      setSpAttack(0)
      setSpDef(0)
      setSpeed(0)
      setDesc('')
      setSubmit(null)
    }
  }, [url, setCard, setName, changeType, setHP, setAttack, setDefense,
    setSpAttack, setSpDef, setSpeed, setDesc, setSubmit])

  return (
    <motion.div style={{ width: progress }} />
  )
}