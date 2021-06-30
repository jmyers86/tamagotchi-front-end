import React, { useState } from 'react'
import { Pet } from '../components/Pet.jsx'

export function GetAllPets() {
  const [allPets, setAllPets] = useState([])

  async function getAllPets() {
    let response = await fetch(
      'https://dashboard.heroku.com/apps/rosco-the-everliving/api/pet'
    )
    let allPets = await response.json()
    console.log(allPets.results)
    // setAllPets(allPets.results)
  }

  return (
    <>
      <header>
        <h1> Ladies and Gentlemen, Rosco and friends!</h1>
      </header>
      <main>
        <ul>
          {allPets.map(function (pet) {
            return (
              <Pet
                name={pet.name}
                birthday={pet.birthday}
                hungerLevel={pet.hungerLevel}
                happinessLevel={pet.happinessLevel}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}
