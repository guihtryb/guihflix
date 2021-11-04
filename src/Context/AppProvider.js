import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import moviesData from '../service';

export default function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const list = await moviesData.getHomeList();
      setMovies(list);
      // console.log(list);
    }
    loadMovies();
  }, 
  []);

  const contextValue = {
    movies
  };

  return(
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

