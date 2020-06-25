import React from 'react'
import { NavLink } from "react-router-dom"
import './VaccinationCountry.css'
import VaccinationCountryBox from './VaccinationCountryBox'

function VaccinationCountry() {
    return(
        <div>
            <div className='background-VaccinationCountry'>
                <VaccinationCountryBox />
            </div>
            <NavLink to="/Map" ><i class="fas fa-arrow-circle-left"></i></NavLink>
        </div>
    )
}

export default VaccinationCountry