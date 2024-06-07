import { useState } from "react";

export default function Player({name, symbal}) {
  const [ isEditing, setIsEditing ] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  let playerName = <span className="player-name">{name}</span>
  // let btnCaption = 'Edit'

  if (isEditing) {
    playerName = <input type="text" value={name} required />
    // btnCaption = 'Save'
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbal">{symbal}</span>
      </span>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
