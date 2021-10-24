import FormRicerca from "./components/formRicerca";
import Movie from "./components/movie";
import Pages from "./components/pages";
import Ricerca from "./components/ricerca";


function App() {
  
  return (
  <div className='App'>
    <FormRicerca />
    <div className='container'>
   <Ricerca />
     <div className='row'>
       <Movie />
       <Movie />
       <Movie />
     </div>

     <hr />
     <Pages />
    </div>
   
    
  </div>
  );
}

export default App;
