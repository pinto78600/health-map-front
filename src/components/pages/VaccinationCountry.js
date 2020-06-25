import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import axios from 'axios'
import VaccinationCountryBox from './VaccinationCountryBox'
import './VaccinationCountry.css'

const VaccinationCountry = () => {
  const [mapList, setmapList] = useState([])
  const fetchMapList = async () => {
    const result = await axios.get('http://localhost:8080/vaccine')
    setmapList(result.data)
    console.log(result.data);

  }
  useEffect(() => {
    fetchMapList()
  }, [])


  return (
    <div>
      <div className='background-VaccinationCountry'>
        {mapList.map(map => {
          console.log('map:' + map.name + '' + "" + map.disease + map.value + '' )
          return <VaccinationCountryBox name={map.name} />
        })}
      </div>
      <NavLink to="/Map" ><i class="fas fa-arrow-circle-left"></i></NavLink>
    </div>
  )
}

export default VaccinationCountry