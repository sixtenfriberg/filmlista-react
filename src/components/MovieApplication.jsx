import { useState } from 'react'
import MovieList from './MovieList'

const testMovies = [
  { id: 1, title: 'Star Wars', grade: 5 },
  { id: 2, title: 'Inception', grade: 5 },
  { id: 3, title: 'Titanic', grade: 4 },
]

function MovieApplication() {
  const [movies, setMovies] = useState(testMovies)

  function deleteMovie(id) {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id))
  }

  return (
    <div className="container my-4" style={{ maxWidth: '720px' }}>
      <div className="bg-white p-4 shadow-sm">
        <h1>Min filmlista</h1>

        <h2 className="mt-4">Inlagda filmer</h2>
        <MovieList movies={movies} onDeleteMovie={deleteMovie} />
      </div>
    </div>
  )
}

export default MovieApplication