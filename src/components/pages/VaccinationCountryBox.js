import React from 'react'
import './VaccinationCountryBox.css'

const VaccinationCountryBox  = props => {
   return(
        <div className='background-VaccinationCountryBox'>
           <h1>{props.map}</h1>
           {props.mapCountry.map(country => { 
            return(
           <div className='countryList'> 
            <p className="p-country-disease">{country.disease}</p>
            <p className="">{country.value}</p>
          </div>
           )
           })}
         </div>
    )
}

export default VaccinationCountryBox