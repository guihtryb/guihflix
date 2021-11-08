import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import '../Style/MainMovie.css'

export default function MainMovie() {
  const { movieInfos, mainMovie } = useContext(AppContext);
  
  const movieGenres = movieInfos.genres ? movieInfos.genres.map(({name}) => name) : null;
  const releaseDate = new Date(movieInfos.release_date);
  return (
    mainMovie &&
      <section className="main-movie" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfos.backdrop_path})`,
      }}>
          <div className="vertical-shadow">
            <div className="horizontal-shadow">
              <div className="main-movie-container">
              <span className="main-movie-name">{ movieInfos.title }</span>
              <div className="main-movie-infos">
                <div className="main-movie-points">{ movieInfos.vote_average } pontos</div>
                <div className="main-movie-year">{releaseDate.getFullYear()}</div>
              </div>
              <div className="main-movie-description">{ movieInfos.overview }</div>
              <div className="main-movie-buttons">
                <a href={`/watch/${movieInfos.id}`} className="watch-button">► Assistir</a>
                <a href={`/list/add/${movieInfos.id}`} className="my-list-button" >+ Minha Lista</a>
              </div>
              <div className="main-movie-genres"><strong>Gêneros: { movieGenres ? `${movieGenres.join(', ')}` : null}</strong></div>
              </div>
            </div>
          </div>
      </section>
  );
}
