import React, { useState } from 'react'
import './App.css'
import AllFilm from './shared/component/allFilm'
import Film from './shared/component/film'

function App () {
  const [film, setFilm] = useState(null)
  function selectedFilm ({ target }) {
    setFilm(target.value)
  }

  return (
    <div className="App">
      <AllFilm onFilmSelect={selectedFilm} />
   {film ? <Film filmID={film}/> : null }
    </div>
  )
}

export default App
