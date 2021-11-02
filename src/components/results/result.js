import React from 'react'

import { Movie } from "./movie/movie"
import { Pages } from "./pages/pages"

export const Result = (props) => {
  const movies = props.movies;
  const movieList = movies.map((movie) => <Movie key={movie.codice} displayMovie={movie} />);

  return (
    <div className='result'>
      Result
      <div className="row">
      {movieList}</div>
      <Pages currentPage={props.currentPage} pages={props.pages} />

    </div>

  );
};