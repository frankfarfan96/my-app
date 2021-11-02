import React from 'react';

export const FormRicerca = (props) => {
    return(   
    <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand mb-0 h1">Film</span>     
    {/* SE ABBIAMO LA CHIAMATA DI FUNZIONI CON 1 O PIù PARAMETRI VIENE USATO ARROWFACTION */}
    <button onClick={() => props.funzione("series")}>Cerca serie</button>
    <button onClick={() => props.funzione("film")}>Cerca film</button>
  </nav>
  )
}
