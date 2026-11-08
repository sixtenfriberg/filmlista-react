import { useState } from 'react'

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('')
  const [grade, setGrade] = useState('')

  function handleSubmit(event) {
    event.preventDefault() // Hindrar sidan från att laddas om

    if (title.trim() === '') {
      alert('Du måste ange en titel för att kunna spara filmen.')
      return
    }

    if (grade === '') {
      alert('Du måste välja ett betyg för att kunna spara filmen.')
      return
    }

    onAddMovie(title.trim(), Number(grade))

    // Återställ formuläret
    setTitle('')
    setGrade('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="border-bottom pb-2 mt-3">Lägg till en film</h4>

      <div className="mb-3">
        <label htmlFor="title-field" className="form-label fw-bold">
          Titel:
        </label>
        <input
          type="text"
          id="title-field"
          className="form-control"
          placeholder="Titel här..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="grade-field" className="form-label fw-bold">
          Betyg:
        </label>
        <select
          id="grade-field"
          className="form-select"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
        >
          <option value="">Välj betyg här...</option>
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        Spara film
      </button>
    </form>
  )
}

export default AddMovieForm