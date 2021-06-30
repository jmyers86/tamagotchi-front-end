import React from 'react'

export function Pet(props) {
  return (
    <div className="Pet">
      <h1>{props.name}</h1>
      <ul>
        <li>{props.birthday}</li>
        <li>{props.hungerLevel}</li>
        <li>{props.happinessLevel}</li>
        <li>{props.lastInteractedWithDate}</li>
        <li>{props.lastTimeFed}</li>
        <li>{props.isDead}</li>
      </ul>
    </div>
  )
}
