import { useState } from 'react'
import axios from 'axios'

const postEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

function App() {

  return (
    <>
      <header>
        <h1>React Post Form</h1>
      </header>
      <hr />
      <main>
        <form action="">
          <div className='author-container'>
            <label htmlFor="">Author:</label>
            <input type="text" />
          </div>
          <div className='title-container'>
            <label htmlFor="">Title:</label>
            <input type="text" />
          </div>
          <div className='body-container'>
            <label htmlFor="">Body:</label>
            <input type="text" />
          </div>
          <div className='public-container'>
            <input type="checkbox" />
            <label htmlFor="">Check to Public</label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </main>
    </>
  )
}

export default App
