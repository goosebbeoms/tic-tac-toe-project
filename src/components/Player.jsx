import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
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
        <span className="player-symbal">{symbol}</span>
      </span>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
