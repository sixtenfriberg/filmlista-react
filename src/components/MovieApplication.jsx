import { useState } from 'react'
import AddMovieForm from './AddMovieForm'
import MovieList from './MovieList'

function MovieApplication() {
  const [movies, setMovies] = useState([])

  function addMovie(title, grade) {
    const newMovie = { id: crypto.randomUUID(), title, grade }
    setMovies((prevMovies) => [...prevMovies, newMovie])
  }

  function deleteMovie(id) {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id))
  }

  return (
    <div className="container my-4" style={{ maxWidth: '720px' }}>
      <div className="bg-white p-4 shadow-sm">
        <h1>Min filmlista</h1>
        <AddMovieForm onAddMovie={addMovie} />

        <h2 className="mt-4">Inlagda filmer</h2>
        <MovieList movies={movies} onDeleteMovie={deleteMovie} />
      </div>
    </div>
  )
}

export default MovieApplication