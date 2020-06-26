import React from 'react'
import globe from './globe.svg'
import './Globe.css'

function Globe() {

  
  return (
    <div className='globe'>
        <img
          src={globe}
          alt='globe'
        />
        <h1 className='title-logo'>Docto MAP</h1>
    </div>
  );
}

export default Globe