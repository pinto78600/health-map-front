import React from 'react';
import { Switch, Route } from "react-router-dom"
import Map from './components/pages/Map'
import VaccinationCountry from './components/pages/VaccinationCountry'
import HomePage from'./components/pages/HomePage'
import Calendar from './components/pages/Calendar'
import './App.css'

// import Photos from './components/Photos'
// import Globe from './components/Globe'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Map" component={Map} />
          <Route path="/VaccinationCountry" component={VaccinationCountry} />
          <Route path="/Calendar" component={Calendar} />
        </Switch>
    </div>
  )
}

export default App
