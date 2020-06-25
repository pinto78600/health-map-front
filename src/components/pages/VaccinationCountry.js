import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import axios from 'axios'
import VaccinationCountryBox from './VaccinationCountryBox'
import './VaccinationCountry.css'

const VaccinationCountry = (props) => {
  const [mapList, setmapList] = useState([])
  const fetchMapList = async () => {
    const result = await axios.get('http://localhost:8080/vaccine')
    setmapList(result.data)
  }
  useEffect(() => {
    fetchMapList()
  }, [])

  console.log(props.location.map);
  
  return (
    <div>
      <div className='background-VaccinationCountry'>
        {mapList.map(map => {
         // console.log('map:' + map.name + '' + "" + map.disease + map.value + '' )
          return <VaccinationCountryBox name={map.name} map={props.location.map} />
        })}
      </div>
      <NavLink to="/Map" ><i class="fas fa-arrow-circle-left"></i></NavLink>
    </div>
  )
}

export default VaccinationCountry