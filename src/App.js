import React from 'react';
import Map from './components/pages/Map'
import './App.css'

import Photos from './components/Photos'
import Globe from './components/Globe'


function App() {

  return (
    <div className="App">
      <Globe />
      <Map />
      <Photos />
    </div>
  );
}

export default App;
