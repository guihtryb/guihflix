import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import '../Style/MainMovie.css'

export default function MainMovie() {
  const { mainMovie } = useContext(AppContext);
  return(
    mainMovie &&
      <section className="main-movie" style={{
        backgroundSize: 'cover',
        backgroundPosition: ' center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${mainMovie.backdrop_path})`
      }}>
          <h2> { mainMovie.original_name } </h2>
          <div className="shadow"></div>
      </section>
  );
}
