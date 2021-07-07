import React, { useState, useEffect } from 'react'
import { Pet } from '../components/Pet.jsx'

export function GetAllPets() {
  const [allPets, setAllPets] = useState([])
  const [newPet, setNewPet] = useState({})
  const [newNameText, setNewNameText] = useState('Rosco')

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

  async function postNewPet(event) {
    event.preventDefault()
    const response = await fetch(
      `https://rosco-the-everliving.herokuapp.com/api/Pet`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: newNameText,
        }),
      }
    )
    const newPetData = await response.json()
    console.log(newPetData)
    setNewPet(newPetData)
  }
  useEffect(() => {
    getAllPets()
  }, [newPet])

  return (
    <>
      <header>
        <h1> Ladies and Gentlemen, Rosco and friends!</h1>
      </header>
      <main>
        <form onSubmit={postNewPet} className="SubmitForm">
          <input
            type="text"
            value={newNameText}
            onChange={event => setNewNameText(event.target.value)}
          />
          <button type="submit">Create a new friend!</button>
        </form>
        <ul>
          {allPets.map(function (pet) {
            return (
              <Pet
                className="AllPets"
                id={pet.id}
                key={pet.id}
                name={pet.name}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}
