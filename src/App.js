import React from "react";
import MovieList from './Component/MovieList'
import "./App.css";
import {Routes,Route} from "react-router-dom" ;
import Description from './Component/Description'
import { ListsMovies } from "./Component/ListsMovies";

function App() {
  return (
    <React.Fragment>
      <Routes>     
        <Route path='/' element={<MovieList ListsMovies={ListsMovies}/>}/>
        <Route path='/:id' element = {<Description  ListsMovies={ListsMovies} />}/>    
      </Routes>
    
    </React.Fragment>
  );
}

export default App;