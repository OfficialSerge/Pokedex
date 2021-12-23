import './ShowStats.css'

export const ShowStats = ({ selectPok, setForm, showForm }) => {
  return (
    <div className="stats">
      <label className="label" onClick={() => setForm(!showForm)}>Toggle Form</label>
      {selectPok &&
        <>
          <img className="card" alt='' src={selectPok.url} />

          <h2 className='name'>{selectPok.name}</h2>

          <h2 className='type'>{selectPok.type} type</h2>

          <p className='desc'>{selectPok.desc}</p>

          <div className="table-div">
            <h3>Base Stats</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td className="cell-num">{selectPok.HP}</td>
                  <td className="cell-barchart">
                    <div className={`barchart-bar-${Math.floor(selectPok.HP/30)}`} style={{ width: `${selectPok.HP/2}%` }}></div>
                  </td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td className="cell-num">{selectPok.attack}</td>
                  <td className="cell-barchart">
                    <div className={`barchart-bar-${Math.floor(selectPok.attack/30)}`} style={{ width: `${selectPok.attack/2}%` }}></div>
                  </td>
                </tr>
                <tr>
                  <th>Defense</th>
                  <td className="cell-num">{selectPok.defense}</td>
                  <td className="cell-barchart">
                    <div className={`barchart-bar-${Math.floor(selectPok.defense/30)}`} style={{ width: `${selectPok.defense/2}%` }}></div>
                  </td>
                </tr>
                <tr>
                  <th>Sp. Attack</th>
                  <td className="cell-num">{selectPok.spAttack}</td>
                  <td className="cell-barchart">
                    <div className={`barchart-bar-${Math.floor(selectPok.spAttack/30)}`} style={{ width: `${selectPok.spAttack/2}%` }}></div>
                  </td>
                </tr>
                <tr>
                  <th>Sp. Def</th>
                  <td className="cell-num">{selectPok.spDef}</td>
                  <td className="cell-barchart">
                    <div className={`barchart-bar-${Math.floor(selectPok.spDef/30)}`} style={{ width: `${selectPok.spDef/2}%` }}></div>
                  </td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td className="cell-num">{selectPok.speed}</td>
                  <td className="cell-barchart">
                    <div className={`barchart-bar-${Math.floor(selectPok.speed/30)}`} style={{ width: `${selectPok.speed/2}%` }}></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      }
    </div >
  )
}