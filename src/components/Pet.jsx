import React from 'react'
import { Link } from 'react-router-dom'

export function Pet(props) {
  return (
    <div className="Pet" key={props.id}>
      {/* I had to add '+1' to the index  */}
      <Link to={`/${props.id + 1}`}>
        <h1>{props.name}</h1>
      </Link>
      <h2>-------------------------</h2>
      <ul>
        <li className="Birthday"> {props.birthday}</li>
        <li className="HungerLevel"> {props.hungerLevel}</li>
        <li className="HappinessLevel">{props.happinessLevel}</li>
        <li className="LastInteracted">{props.lastInteractedWithDate}</li>
        <li className="LastFed">{props.lastTimeFed}</li>
        <li className="IsDead">{props.isDead}</li>
      </ul>
      <h2>-------------------------</h2>
    </div>
  )
}
