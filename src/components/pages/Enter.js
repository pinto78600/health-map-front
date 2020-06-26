import React from 'react'

import { NavLink } from "react-router-dom"
import './Enter.css'

class Enter extends React.Component {

    render(){
        return (
            <div>
                <NavLink to="/Map"><button className="button-Enter" type="send">Go World Map</button></NavLink>  
            </div>
        )
    }
}

export default Enter