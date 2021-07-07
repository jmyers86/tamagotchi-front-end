import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { GetAllPets } from './pages/GetAllPets'
import { PetDetails } from './pages/PetDetails'
import logo from './Images/joe logo.png'

export function App() {
  return (
    <>
      <header>
        <h1>Welcome to the digital petting zoo!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <GetAllPets />
          {/* <NewPet /> */}
          {/* Home */}
        </Route>
        <Route exact path="/:id">
          <PetDetails />
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
      <footer>
        <img src={logo} height="64" alt="logo" />
        <p>&copy; 2021 bigphaez industries, Inc.</p>
      </footer>
    </>
  )
}
