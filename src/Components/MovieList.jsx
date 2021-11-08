import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext';
import '../Style/MovieList.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function MovieList() {
  const { movies } = useContext(AppContext);
  const [scrollX, setScrollX] = useState(0);


  const handleLeftClick = () => {
    scrollX < 0 ? setScrollX(scrollX + 200) : setScrollX(0); 
  };
  const handleRightClick = () => {
    scrollX !== -400 ? setScrollX(scrollX - 200) : setScrollX(-400); 
  };


  if (!movies.length) return <h3>Loading...</h3>;

  return (
    <section className="movie-list-container">
      { movies.map(({ title, items }, listKey) => (
        <div className="movie-list" key={ listKey } >
          <h3 className="list-title"> { title } </h3>
          <div style={{ marginLeft: `${scrollX}vh` }} className="movie-cards-container">
            <div className="arrow-left" onClick={ handleLeftClick }>
              <ArrowBackIosIcon style={{fontSize: 50}} />
            </div>
            <div className="arrow-right" onClick={ handleRightClick }>
            <ArrowForwardIosIcon style={{fontSize: 50}}/>
            </div>
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
