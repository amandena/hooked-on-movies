import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import Search from './components/Search'

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=d681ac61'

function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search)
        setLoading(false)
      })
  },[])

  return (
    <div className="App">
      App
      <Header/>
      <Search/>
      <Movie/>
    </div>
  )
}

export default App
