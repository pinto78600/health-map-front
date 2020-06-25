import React from 'react'
import globe from './globe.svg'
import styled from 'styled-components'
import './Globe.css'

function Globe() {

  const GlobeStyle = styled.div`
  margin: auto;
  color: black;
  padding-top: 4em;
  width: 70%;

svg {

  :hover: #fff;
  
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

  return (
    <div>
      <GlobeStyle>
        <img
          src={globe}
          alt='globe'
        />
        <h1 className='title-logo'>Docto Map</h1>
      </GlobeStyle>
    </div>
  );
}

export default Globe