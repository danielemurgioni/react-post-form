import { useState } from 'react'
import axios from 'axios'

const postEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

function App() {

  //variabile di stato oggetto, conterà i dati della form
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
    public: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData, [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    axios.post(postEndpoint, formData)
      .then((res) => {
        console.log(res.data)
        alert('Post creato')
      })
  }

  return (
    <>
      <header>
        <h1>React Post Form</h1>
      </header>
      <hr />
      <main>
        <form action="">
          <div className="inputs-container">
            <div className='author-container'>
              <label htmlFor="">Author:</label>
              <input type="text" name='author' value={formData.author} onChange={handleChange} />
            </div>
            <div className='title-container'>
              <label htmlFor="">Title:</label>
              <input type="text" name='title' value={formData.title} onChange={handleChange} />
            </div>
            <div className='body-container'>
              <label htmlFor="">Body:</label>
              <input type="text" name='body' value={formData.body} onChange={handleChange} />
            </div>
            <div className='public-container'>
              <input type="checkbox" name='public' checked={formData.public} onChange={handleChange} />
              <label htmlFor="">Check to Public</label>
            </div>
          </div>
          <button type='submit' onClick={handleSend}>Submit</button>
        </form>
      </main>
    </>
  )
}

export default App
