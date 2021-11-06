import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import moviesData from '../service';

export default function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);
  const [movieInfos, setMovieInfos] = useState([]);

  const getRandomMainMovie = async (list) => {
    const topRated = list.filter((item) => item.slug === 'top-rated');
    const randomChoose = Math.floor(Math.random() * (topRated[0].items.results.length));
    const chosen = topRated[0].items.results[randomChoose];
    const chosenInfo = await moviesData.getMovieInfo(chosen.id, 'movie');
    console.log(chosenInfo);
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



  const contextValue = {
    movies,
    mainMovie,
    movieInfos,
  };

  return(
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

