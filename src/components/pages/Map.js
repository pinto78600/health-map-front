import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components'
import world from '../../world.json'
import './Map.css'

function Map() {

  const MapStyle = styled.div`
    margin: auto;
    color: black;
    padding: 3em;
    width: 80%;

  svg {
    
    // All layers are just path elements
    path {
      fill: #1c8ea1;
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

  const onClick = ({ target }) => {
    const name = target.attributes.name.value;
      window.open(`https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage/${name}`)
  }

  return (
    <div className="App">
      <MapStyle className='MapStyle-Page' >
        <VectorMap className='VectorMap-Page' {...world} layerProps={{ onClick }} />
      </MapStyle>
    </div>
  );
}

export default Map




