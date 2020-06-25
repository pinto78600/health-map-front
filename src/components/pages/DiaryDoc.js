import React from 'react'
import './Diary.css'

const Diary = () => {
  return (
    <>
      <h1>Validation of vaccin</h1>
      <div className='formular'>
        <form>
          <div classname="line-form">
            <label>Date</label>
          <input type="date"
                id="start"
                name="trip-start"
                min="1925-01-01"
                max="2125-12-31" 
                required />
          </div>
          <div classname="line-form">
            <label>Nature of vaccin</label>
          <select name="vaccins" required>
                <option value="">Please choose a vaccin</option>
                <option value="yellow-fever">Yellow fever</option>
                <option value="paludism">Paludism</option>
              </select>
          </div>
          <div classname="line-form">
            <label>Dose</label>
              <input type='number' min='0.1' max='10' required />mg
          </div>
          <div classname="line-form">
            <label>Physician's signature</label>
            <input type="file" accept="image/*,.pdf" required />
          </div>
          <div classname="line-form">
            <label>Comments</label>
            <input type='textarea' />
          </div>
          <button>Send</button>
        </form>
      </div>
    </>
  )
}

export default Diary