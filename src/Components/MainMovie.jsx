import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

export default function MainMovie() {
  const { movies } = useContext(AppContext);
  return(
    <main>
      MainMovie
    </main>
  );
}
