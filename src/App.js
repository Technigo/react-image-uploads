import React, { useState, useRef } from 'react'

const API_URL = 'https://express-image-uploads.herokuapp.com/pets'

export const App = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Pet Image
        <input type="file" ref={fileInput} />
      </label>

      <label>
        Pet name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <button type="submit">
        Submit
      </button>
    </form>
  )
}
