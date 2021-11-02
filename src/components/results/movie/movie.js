import React from 'react'

export const Movie = (props) => {
  return (
    <div className="card-body">
      <p>Titolo: {props.displayMovie.title}</p>
      <p>Descrizione: {props.displayMovie.desciption}</p>
      <p>Img: {props.displayMovie.img}</p>
      <p>Novita: {props.displayMovie.novita}</p>
      <button>Elimina</button>
    </div>
  )
}

