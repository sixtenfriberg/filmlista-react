import { useState } from 'react'
import AddMovieForm from './AddMovieForm'
import MovieList from './MovieList'
import OrderByAlphaButton from './OrderByAlphaButton'
import OrderByGradeButton from './OrderByGradeButton'

function MovieApplication() {
  const [movies, setMovies] = useState([])

  function addMovie(title, grade) {
    const newMovie = { id: crypto.randomUUID(), title, grade }
    setMovies((prevMovies) => [...prevMovies, newMovie])
  }

  function deleteMovie(id) {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id))
  }

  function sortByTitle() {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) => a.title.localeCompare(b.title, 'sv')),
    )
  }

  function sortByGrade() {
    setMovies((prevMovies) =>
      [...prevMovies].sort(
        (a, b) => b.grade - a.grade || a.title.localeCompare(b.title, 'sv'),
      ),
    )
  }

  return (
    <div className="container my-4" style={{ maxWidth: '720px' }}>
      <div className="bg-white p-4 shadow-sm">
        <h1>Min filmlista</h1>
        <AddMovieForm onAddMovie={addMovie} />

        <h2 className="mt-4">Inlagda filmer</h2>
        <MovieList movies={movies} onDeleteMovie={deleteMovie} />

        <div className="mt-3">
          <OrderByAlphaButton onClick={sortByTitle} />
          <OrderByGradeButton onClick={sortByGrade} />
        </div>
      </div>
    </div>
  )
}

export default MovieApplication