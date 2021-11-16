import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import moviesData from '../service';

export default function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);
  const [movieInfos, setMovieInfos] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  
  const getRandomMainMovie = async (list) => {
    const topRated = list.filter((item) => item.slug === 'top-rated');
    const randomChoose = Math.floor(Math.random() * (topRated[0].items.results.length));
    const chosen = topRated[0].items.results[randomChoose];
    const chosenInfo = await moviesData.getMovieInfo(chosen.id, 'movie');
    setMainMovie(chosen);
    setMovieInfos(chosenInfo);
  }

  useEffect(() => {
    const loadMovies = async () => {
      const list = await moviesData.getHomeList();
      setMovies(list);
      getRandomMainMovie(list);
    }
    loadMovies();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])



  const contextValue = {
    movies,
    mainMovie,
    movieInfos,
    scrolled,
  };

  return(
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

