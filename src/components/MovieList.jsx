import Movie from './Movie'

function MovieList({ movies, onDeleteMovie }) {
  return (
    <ul className="list-group">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onDelete={onDeleteMovie} />
      ))}
    </ul>
  )
}

export default MovieList