import { FormRicerca } from "./components/formRicerca";

import { useState } from "react";
import { searchMovies } from "./api/searchMovies";
import { Result } from "./components/results/result";

function App() {

  const [results, setResult] = useState(searchMovies());
  console.log("Inizializzazione");

  const handleClick = (type) => {
    setResult(searchMovies(type));
  };

 

  return (
    <div className='App'>
      <FormRicerca funzione={handleClick} />
      <div className='container'>
        <Result pages={results.pages} currentPage={results.currentPage} movies={results.movies} />
      </div>


    </div>
  );
}

export default App;
