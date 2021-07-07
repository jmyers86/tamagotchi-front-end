import React from 'react'
import { Link } from 'react-router-dom'
import combat from '../Images/Tams/Combat.png'
import lilMama from '../Images/Tams/Lil Mama.png'
import nukie from '../Images/Tams/Nukie.png'
import rosco from '../Images/Tams/Rosco.png'
import sushi from '../Images/Tams/Sushi.png'

const images = [combat, lilMama, nukie, rosco, sushi]
export function Pet(props) {
  return (
    <div className="Pet">
      <Link to={`/${props.id}`}>
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
      <img src={images[props.id % images.length]}></img>

      <h2>-------------------------</h2>
    </div>
  )
}
