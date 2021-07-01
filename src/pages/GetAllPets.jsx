import React, { useState, useEffect } from 'react'
import { Pet } from '../components/Pet.jsx'

export function GetAllPets() {
  const [allPets, setAllPets] = useState([])

  async function getAllPets() {
    const response = await fetch(
      'https://rosco-the-everliving.herokuapp.com/api/Pet'
    )
    console.log(response)
    let allPets = await response.json()
    console.log(allPets)
    setAllPets(allPets)
  }

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <>
      <header>
        <h1> Ladies and Gentlemen, Rosco and friends!</h1>
      </header>
      <main>
        <ul>
          {allPets.map(function (pet) {
            return (
              <>
                <Pet
                  name={pet.name}
                  birthday={pet.birthday}
                  hungerLevel={pet.hungerLevel}
                  happinessLevel={pet.happinessLevel}
                />
              </>
            )
          })}
        </ul>
      </main>
    </>
  )
}
