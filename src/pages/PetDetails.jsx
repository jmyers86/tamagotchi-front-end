import { useHistory, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import combat from '../Images/Tams/Combat.png'
import lilMama from '../Images/Tams/Lil Mama.png'
import nukie from '../Images/Tams/Nukie.png'
import rosco from '../Images/Tams/Rosco.png'
import sushi from '../Images/Tams/Sushi.png'

const images = [combat, lilMama, nukie, rosco, sushi]
export function PetDetails() {
  const [pet, setPet] = useState({
    id: undefined,
    name: '',
    birthday: undefined,
    hungerLevel: undefined,
    happinessLevel: undefined,
    lastInteractedWithDate: undefined,
    lastTimeFed: undefined,
    isDead: false,
  })

  const params = useParams()
  // @ts-ignore
  const id = params.id
  const history = useHistory()

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

  async function feedPet() {
    const response = await fetch(
      `https://rosco-the-everliving.herokuapp.com/api/Pet/${id}/feedings`,

      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: { id },
        }),
      }
    )
    console.log(response)
    let newFeed = await response.json()
    setPet(newFeed)
  }
  useEffect(() => {
    feedPet()
  }, [])

  async function scoldPet() {
    const response = await fetch(
      `https://rosco-the-everliving.herokuapp.com/api/Pet/${id}/scoldings`,

      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: { id },
        }),
      }
    )
    console.log(response)
    let newScold = await response.json()
    setPet(newScold)
  }
  useEffect(() => {
    scoldPet()
  }, [])

  async function deletePet() {
    const response = await fetch(
      `https://rosco-the-everliving.herokuapp.com/api/Pet/${id}`,

      {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: { id },
        }),
      }
    )
    console.log(response)
    let newDelete = await response.json()
    setPet(newDelete)
    history.push('/')
  }

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
        <li className="LastInteracted">
          Last Interacted: {pet.lastInteractedWithDate}
        </li>
        <li className="LastFed">Last Fed: {pet.lastTimeFed}</li>

        <li className="IsDead">{pet.isDead ? 'R.I.P' : 'Still kickin!'}</li>
      </ul>
      <img className="DetailImg" src={images[id % images.length]}></img>
      <button onClick={playWithPet}>Play with {pet.name}</button>
      <button onClick={feedPet}>Feed {pet.name}</button>
      <button onClick={scoldPet}>Scold {pet.name}</button>
      <h2>-------------------------</h2>
      <button onClick={deletePet}>Dismiss {pet.name} (for good!)</button>
    </div>
  )
}
