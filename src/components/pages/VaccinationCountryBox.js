import React from 'react'
import './VaccinationCountryBox.css'

const VaccinationCountryBox  = props => {
   return(
        <div className='background-VaccinationCountryBox'>
           <h1>{props.name}</h1>
        </div>
    )
}

export default VaccinationCountryBox