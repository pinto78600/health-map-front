import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import axios from 'axios'
import VaccinationCountryBox from './VaccinationCountryBox'
import Calendar from './Calendar'
import './VaccinationCountry.css'

const VaccinationCountry = (props) => {
  const [mapList, setmapList] = useState([])
  const fetchMapList = async () => {
    const result = await axios.get(`http://localhost:8080/vaccine`)
    setmapList(result.data)
  }
  useEffect(() => {
    fetchMapList()
  }, [])

  
  
  const countrySelected = props.location.map
  
  const mapCountry = mapList.filter(list => list.name  === countrySelected)
  console.log(mapCountry);
  
  return (
    <div>
      <div className='background-VaccinationCountry'>
          
      <VaccinationCountryBox mapCountry={mapCountry}  map={props.location.map} />
      </div>
      <NavLink to="/Map" ><i class="fas fa-arrow-circle-left"></i></NavLink>
      <Calendar />
    </div>
  )
}

export default VaccinationCountry