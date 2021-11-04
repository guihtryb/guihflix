import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import '../Style/MovieList.css'

export default function MovieList() {
  const { movies } = useContext(AppContext);
  
  if (!movies.length) return <h1>No data found</h1>;

  const netflixOriginals = ({ results }) => {
   return results.map((netflixItem, netflixItemKey) => (
      <span key={ netflixItemKey }>
        { netflixItem.name}
      </span>
    )) 
  };

  const otherMovies = ({ results }) => {
    return results.map(({ title }, itemKey) => (
      <span key={itemKey}>{`${title} | `}</span>
    ))
  };
  
  return (
    <section movie-list-container>
      { movies.map(({ title, items }, listKey) => (
        <div className="movie-list" key={ listKey }>
          <span> { title } </span>
          { title === 'Originais do Netflix' ? netflixOriginals(items): otherMovies(items)}
        </div>
      ))}
    </section>
  );
}
