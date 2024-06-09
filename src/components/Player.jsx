import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit'

  if (isEditing) {
    editablePlayerName = <input type="text" defaultValue={playerName} onChange={handleChange} required />
    // btnCaption = 'Save'
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
      </span>
      <span className="player-symbal">{symbol}</span>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
