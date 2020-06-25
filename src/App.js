import React from 'react';
import { Switch, Route } from "react-router-dom"
import Map from './components/pages/Map'
import VaccinationCountry from './components/pages/VaccinationCountry'
import './App.css'
import HomePage from'./components/pages/HomePage'
import Enter from'./components/pages/Enter'


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Map} />
          <Route path="/VaccinationCountry" component={VaccinationCountry} />
        </Switch>
    </div>
  );
}

export default App;
