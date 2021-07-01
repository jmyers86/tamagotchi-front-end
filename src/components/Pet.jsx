import React from 'react'

export function Pet(props) {
  return (
    <div className="Pet">
      <h1>{props.name}</h1>
      <h2>-------------------------</h2>
      <ul>
        <li className="Birthday">Birthday: {props.birthday}</li>
        <li className="HungerLevel">Hunger Level: {props.hungerLevel}</li>
        <li className="HappinessLevel">
          Happiness Level: {props.happinessLevel}
        </li>
        <li className="LastInteracted">{props.lastInteractedWithDate}</li>
        <li className="LastFed">{props.lastTimeFed}</li>
        <li className="IsDead">{props.isDead}</li>
      </ul>
      <h2>-------------------------</h2>
    </div>
  )
}
