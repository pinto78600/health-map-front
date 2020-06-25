import React from 'react';

import Enter from './Enter'
import Globe from '../shared/Globe'
import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <Globe />
            <div className="div-enter">
                <div className='text-HomePage'>
                    <p>Travel Serene,</p> 
                    <p>Travel Vaccinated</p>
                </div>
                <div className="div-Enter">
                    <Enter />
                </div>
            </div>
        </div>
    )
}

export default HomePage

