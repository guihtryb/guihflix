import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext';
import '../Style/MovieList.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Loading from '../Images/LoadinTime.gif';

export default function MovieList() {
  const { movies } = useContext(AppContext);
  const [scrollX, setScrollX] = useState({
    'Originais do Netflix': 0,
    'Recomendados para Você': 0,
    'Em Alta': 0,
    'Ação': 0,
    'Comédia': 0,
    'Terror': 0,
    'Romance': 0,
    'Documentários': 0,
    'Animações': 0
  });


  const handleLeftClick = (list) => {
    const scroll = scrollX[list] + Math.round(window.innerWidth);
    scrollX[list] >= 0 ? setScrollX(
      {
        ...scrollX,
        [list]: 0,
      },
    ) 
    :
    setScrollX(
      {
        ...scrollX,
        [list]: scroll,
      }
    );
  };

  const handleRightClick = (list) => {
    let scroll = scrollX[list] - Math.round(window.innerWidth + 5);
    let listTotalWidth = movies[0].items.results.length * 184;
    if (Math.abs(scroll) >= listTotalWidth + 50) scroll = scrollX[list];

    setScrollX(
        { ...scrollX,
          [list]: scroll,
        }
    );
  };

  if (!movies.length) return (
  <div className="is-loading">
    <img className="loading" src={Loading} alt="Loading"/>;
  </div>
  );

  return (
    <section className="movie-list-container">
      { movies.map(({ title, items }, listKey) => (
        <div className="movie-list" key={ listKey } >
          <h3 className="list-title"> { title } </h3>
          <div style={{ marginLeft: `${scrollX[title]}px` }} className="movie-cards-container">
            <div className="arrow-left" onClick={ () => handleLeftClick(title) }>
              <ArrowBackIosIcon style={{fontSize: 50}} />
            </div>
            <div className="arrow-right" onClick={ () => handleRightClick(title) }>
            <ArrowForwardIosIcon style={{fontSize: 50}}/>
            </div>
              { items.results.map((item, itemKey) => (
                <div className="movie-card"key={itemKey}>
                  <img className="movie-cover" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={!item.title ? item.name : item.title } />
                </div>
          ))}
          </div>
      </div>
      ))}
    </section>
  );
}
