import React from 'react'

function DisplayPhoto(props) {
    return (
        <figure>
            <img src={props.image} alt='picture of the country' />
        </figure>
    );
}

export default DisplayPhoto
