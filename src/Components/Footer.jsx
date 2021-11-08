import React from 'react'
import '../Style/Footer.css'

export default function Footer() {
  return(
    <footer className="footer-container">
      <span className="developed-by">Desenvolvido por <i>Guilherme Viana</i></span>
      <span className="netflix-rights">Direitos de imagens à <i>Netflix</i></span>
      <span className="moviedb-data">Dados retirados do site <i>Themoviedb.com</i></span>
    </footer>
  );
}
