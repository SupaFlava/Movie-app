import "./App.css";

import React, { useState, useEffect } from "react";

import MovieList from "./Components/MovieList";





import Moviecard from "./Components/Moviecard";
import Ratings from './Components/Ratings';


const App = () => {
  
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Rating: 3,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Rating: 2,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Rating: 5,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  
  // ADDING Searching 
 const addMovie =  (newMovie) => {
  setSearchResult([...searchResult, newMovie]);
  
  setMovies([...movies, newMovie]);

 
  
  
  


 
  };
  const [starRate,  setStarRate] = useState(0);
 
 const filterStars = (starRate) =>{
   const updateStars = movies.filter((movie) => movie.Rating >= starRate);
   setStarRate(updateStars)
   
 }
// keyword Search 
const [search, setSearch] = useState("")
const [searchResult, setSearchResult] = useState(movies)
const filterMovies = event => {
  setSearch(event.target.value);
 
}

useEffect(() =>{
  const result = movies.filter( movie =>  movie.Rating >= starRate && movie.Title.toLowerCase().includes(search) )
  setSearchResult(result);
}, [search, movies,starRate ]);

 
const getStar = (s)=>{
setStarRate(s)
}


  return (
    <div className="container">
      <div className="column">
        
        <input className="Input" type="text" placeholder="search..." value={search} onChange={filterMovies}/>
        <Ratings className="RatingStar" getStar={getStar}  />
        
        
        <MovieList className="MovieList" movies={searchResult }   />
        <Moviecard className="MovieCard"  addMovie={addMovie} />
        
      </div>
    </div>
  );
};

export default App;
