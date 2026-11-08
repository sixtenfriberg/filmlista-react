function Movie({ movie, onDelete }) {
    // Skapar lika många stjärnor som filmens betyg
    const stars = Array.from({ length: movie.grade }, (_, index) => (
      <span key={index}>★</span>
    ))
  
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{movie.title}</span>
        <span className="d-flex align-items-center">
          <span className="stars" aria-label={`Betyg ${movie.grade} av 5`}>
            {stars}
          </span>
          <button
            type="button"
            className="btn btn-link delete-button ms-2 p-0"
            aria-label={`Ta bort ${movie.title}`}
            onClick={() => onDelete(movie.id)}
          >
            ✕
          </button>
        </span>
      </li>
    )
  }
  
  export default Movie