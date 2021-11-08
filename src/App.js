import React from 'react';
import AppProvider from './Context/AppProvider';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainMovie from './Components/MainMovie';
import MovieList from './Components/MovieList';
import './Style/App.css'

export default function App() {
  return (
    <AppProvider>
    <div className="home-page">
      <Header />
      <MainMovie />
      <MovieList />
      <Footer />
    </div>
    </AppProvider>
  );
}