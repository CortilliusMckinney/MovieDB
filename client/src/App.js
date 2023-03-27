
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";

import Form from './components/Form';
import MovieList from './components/MovieList';
import OneMovie from "./components/OneMovie";

function App() {
  return (
    <div className="App">
     {/* <Form/> */}
     {/* <MovieList/> */}
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/movielist' element={<MovieList/>}/>
      <Route path='/onemovie/:id' element={<OneMovie/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
