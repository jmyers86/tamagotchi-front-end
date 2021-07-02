import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { GetAllPets } from './pages/GetAllPets'
import { PetDetails } from './pages/PetDetails'

export function App() {
  return (
    <>
      <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
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
    </>
  )
}
