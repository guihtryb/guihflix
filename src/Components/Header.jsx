import React, { useContext } from 'react';
import '../Style/Header.css';
import Logo from '../Images/LogoWithoutBg.png';
import UserIcon from '../Images/UserIcon.jpg';
import AppContext from '../Context/AppContext';

export default function Header() {
  const { scrolled } = useContext(AppContext);

    const scrolledStyle = {
      background: 'linear-gradient(to bottom, #080808, transparent)',
      backgroundColor: '#181818',
    };
    const notScrolledStyle =  {
      background: 'linear-gradient(to bottom, #101010, transparent)'
    };

  return (
    <header className="header-container" style={ scrolled ? scrolledStyle  : notScrolledStyle }>
      <a href="#main-movieid" ><img src={ Logo } alt="Netflix Logo"  className="netflix-logo"/></a>
      <img src={ UserIcon } alt="User Icon" className="user-icon" />
    </header>
  );
}
