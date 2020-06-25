import React, { useState } from 'react'
import axios from 'axios'

function Photos() {

  const [photo, setPhoto] = useState('')
  const [clientId] = useState('sSiN4TxWyMDbZq2P4TASV0BkQZ1uNJGqnNAAOA8PVAU')
  const [result, setResult] = useState([])

  function handleChange(e) {
    setPhoto(e.target.value)
  }

  function handleSubmit(e) {
    fetchData()
  }

  const url = `https://api.unsplash.com/search/photos?page=1&per_page=1&query${photo}&client_id=${clientId}`

  const fetchData = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        setResult(response.data.results)
      })
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type='text'
        name='photo'
        placeholder='Putain, ça marche ou pas ?'
      />
      <button
        onClick={handleSubmit}
        type='submit'
      >
      </button>

      {result.map((photo) => (
        <img
          alt='country'
          src={photo.urls.small}
        />
      ))}
    </div>
  )
}

export default Photos
