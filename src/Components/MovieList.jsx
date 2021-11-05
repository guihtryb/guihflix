import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import '../Style/MovieList.css'

export default function MovieList() {
  const { movies } = useContext(AppContext);
  
  if (!movies.length) return <h3>Loading...</h3>;

  return (
    <section className="movie-list-container">
      { movies.map(({ title, items }, listKey) => (
        <div className="movie-list" key={ listKey }>
          <h3 className="list-title"> { title } </h3>
          <div className="movie-cards-container">
            { items.results.map((item, itemKey) => (
              <div className="movie-card" key={itemKey}>
                <img className="movie-cover" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={!item.title ? item.name : item.title } />
              </div>
        ))}
          </div>
        </div>
      ))}
    </section>
  );
}
