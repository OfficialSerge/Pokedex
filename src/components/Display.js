import { UploadCard } from "./UploadCard"
import { ShowStats } from "./ShowStats"
import { useState } from "react"

export const Display = ({ selectPok }) => {
  const [showForm, setForm] = useState(false)

  return (
    <div className="display">
      {showForm ?
        <UploadCard setForm={setForm} showForm={showForm}/>
        :
        <ShowStats selectPok={selectPok} setForm={setForm} showForm={showForm}/>
      }
    </div>
  )
}