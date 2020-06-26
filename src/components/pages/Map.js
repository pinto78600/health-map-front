import React from 'react'
import { Redirect } from 'react-router-dom'
import { VectorMap } from '@south-paw/react-vector-maps'
import styled from 'styled-components'
import world from '../../world.json'
import './Map.css'

class Map extends React.Component {
  state = {
    redirect: false,
    country: ''
  }
  
  render() {

    const MapStyle = styled.div`
    
    margin: auto;
    min-height: 100vh;
    width: 70%;
   

  svg {
    
    // All layers are just path elements
    path {
      fill: #fff;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(158,255,221);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(127,255,212);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`   
   
    const onClick = ({target}) => {
      this.setState({ country: target.attributes.name.value},()=> this.setState({redirect: true}))
     
    }

    if (this.state.redirect === true) {
      return (
        <Redirect to={{ pathname: `/VaccinationCountry/`, map:this.state.country }} />
      )
    }


    return (
      <div>
        <MapStyle className='MapStyle-Page' >
          <VectorMap className='VectorMap-Page' {...world} layerProps={{ onClick }}  />
        </MapStyle>
      </div>
    );
  }
}

export default Map




