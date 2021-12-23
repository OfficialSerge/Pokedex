import { React, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import './UploadCard.css'

export const UploadCard = ({ setForm, showForm }) => {
  const [card, setCard] = useState(null)
  const [name, setName] = useState('')
  const [type, changeType] = useState(0)
  const [HP, setHP] = useState(0)
  const [attack, setAttack] = useState(0)
  const [defense, setDefense] = useState(0)
  const [spAttack, setSpAttack] = useState(0)
  const [spDef, setSpDef] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [desc, setDesc] = useState('')
  const [submitPok, setSubmit] = useState(null)

  const TYPES =
    ['normal', 'fire', 'water', 'grass',
      'electric', 'ice', 'fighting', 'poison',
      'ground', 'flying', 'psychic', 'bug', 'rock',
      'ghost', 'dark', 'dragon', 'steel', 'fairy']


  function processForm(e) {
    e.preventDefault()
    const pokemon = { name, type, HP, attack, defense, spAttack, spDef, speed, desc, card }
    setSubmit(pokemon)
  }

  return (
    <form className="form" onSubmit={processForm}>
      <label className="label" onClick={() => setForm(!showForm)}>Go Back</label>

      <div className="card-form">
        {card ?
          <img className="card-img" alt='' src={URL.createObjectURL(card)} />
          :
          <input type="file" onChange={(e) => setCard(e.target.files[0])} accept=".jpeg, .jpg, .png" required/>
        }
      </div>

      <input className="pok-name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} spellCheck="false" required/>

      <select className="pok-type" placeholder="Type" value={type} onChange={(e) => changeType(e.target.value)} required>
        {TYPES.map((TYPE) => (<option value={TYPE}>{TYPE}</option>))}
      </select>

      <div className="pok-info">
        <input type="number" value={HP ? HP : ''} onChange={(e) => setHP(Number(e.target.value))} min="0" max="200" step="1" placeholder="HP" required/>
        <input type="number" value={attack ? attack : ''} onChange={(e) => setAttack(Number(e.target.value))} min="0" max="200" step="1" placeholder="Attack" required/>
        <input type="number" value={defense ? defense : ''} onChange={(e) => setDefense(Number(e.target.value))} min="0" max="200" step="1" placeholder="Defense" required/>
        <input type="number" value={spAttack ? spAttack : ''} onChange={(e) => setSpAttack(Number(e.target.value))} min="0" max="200" step="1" placeholder="Sp. Attack" required/>
        <input type="number" value={spDef ? spDef : ''} onChange={(e) => setSpDef(Number(e.target.value))} min="0" max="200" step="1" placeholder="Sp. Def" required/>
        <input type="number" value={speed ? speed : ''} onChange={(e) => setSpeed(Number(e.target.value))} min="0" max="200" step="1" placeholder="Speed" required/>
      </div>

      <div className="pok-desc">
        <textarea cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Notable Traits" required></textarea>
        {submitPok ? <ProgressBar setCard={setCard} setName={setName} changeType={changeType}
          setHP={setHP} setAttack={setAttack} setDefense={setDefense} setSpAttack={setSpAttack}
          setSpDef={setSpDef} setSpeed={setSpeed} setDesc={setDesc} submitPok={submitPok} setSubmit={setSubmit} />
          :
          <button>Submit</button>
        }
      </div>
    </form>
  )
}