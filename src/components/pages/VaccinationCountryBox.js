import React from 'react'
import './VaccinationCountryBox.css'

const VaccinationCountryBox  = props => {
   return(
        <div className='background-VaccinationCountryBox'>
           <h1>{props.map}</h1>
           <img src={require(`../picture/${props.map}.jpg`)} alt={props.map}/>
           {props.mapCountry.map(country => { 
            return(
           <div className='countryList'> 
             <p>{country.disease}</p>
              <p>{country.value}</p>
            </div>
           )
           })}
         </div>
    )
}

export default VaccinationCountryBox