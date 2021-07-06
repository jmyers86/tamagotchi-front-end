import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export function PetDetails() {
  const [pet, setPet] = useState({
    name: '',
    birthday: undefined,
    hungerLevel: undefined,
    happinessLevel: undefined,
    lastInteractedWithDate: undefined,
    lastTimeFed: undefined,
    isDead: false,
  })

  const params = useParams()
  const id = params.id

  async function getPet() {
    const response = await fetch(
      `https://rosco-the-everliving.herokuapp.com/api/Pet/${id}`
    )
    console.log(response)
    let allPets = await response.json()
    console.log(allPets)
    setPet(allPets)
  }

  useEffect(() => {
    getPet()
  }, [])

  async function playWithPet() {
    const response = await fetch(
      `https://rosco-the-everliving.herokuapp.com/api/Pet/${id}/playtimes`,

      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: { id },
        }),
      }
    )
    console.log(response)
    let newPlay = await response.json()
    setPet(newPlay)
  }
  useEffect(() => {
    playWithPet()
  }, [])

  return (
    <div className="Pet" key={pet.id}>
      <h1>Details for {pet.name}</h1>

      <h2>-------------------------</h2>
      <ul>
        <li className="Birthday">Birthday: {pet.birthday}</li>
        <li className="HungerLevel">Hunger Level: {pet.hungerLevel}</li>
        <li className="HappinessLevel">
          Happiness Level: {pet.happinessLevel}
        </li>
        <li className="LastInteracted">{pet.lastInteractedWithDate}</li>
        <li className="LastFed">{pet.lastTimeFed}</li>
        <li className="IsDead">{pet.isDead ? 'R.I.P' : 'Still kickin!'}</li>
      </ul>
      <button onClick={playWithPet}>Play with {pet.name}</button>
      <h2>-------------------------</h2>
    </div>
  )
}
