import React from 'react';
import Map from './components/pages/Map'
import './App.css'
import HomePage from'./components/pages/HomePage'
import Enter from'./components/pages/Enter'

function App() {
  return (
    <div className="App">
      <Map />
      <HomePage />
      <Enter />
    </div>
  );
}

export default App;
