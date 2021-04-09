import React, { useState, useEffect } from "react";

import MovieList from "./Components/MovieList";

import Moviecard from "./Components/Moviecard";
import Ratings from "./Components/Ratings";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0076759",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      Rating: 5,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      Title: "Nobody",
      Year: "2021",
      imdbID: "tt0080684",
      description:
        "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.",
      Rating: 2,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      Title: "Mortal Kombat",
      Year: "2021",
      imdbID: "tt0086190",
      description:
        "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
      Rating: 4,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
  ]);

  // ADDING Searching
  const addMovie = (newMovie) => {
    setSearchResult([...searchResult, newMovie]);

    setMovies([...movies, newMovie]);
  };
  const [starRate, setStarRate] = useState(0);

  const filterStars = (starRate) => {
    const updateStars = movies.filter((movie) => movie.Rating >= starRate);
    setStarRate(updateStars);
  };
  // keyword Search
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(movies);
  const filterMovies = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const result = movies.filter(
      (movie) =>
        movie.Rating >= starRate && movie.Title.toLowerCase().includes(search)
    );
    setSearchResult(result);
  }, [search, movies, starRate]);

  const getStar = (s) => {
    setStarRate(s);
  };

  return (
    <>
      <div className="NavBar">
        <input
          className="Input"
          type="text"
          placeholder="search..."
          value={search}
          onChange={filterMovies}
        />
        <h1 style={{ color: "#f7f7f7", fontFamily: "Sans Sarif" }}>
          Movie App{" "}
        </h1>

        <Ratings className="RatingStar" getStar={getStar} />
      </div>

      <MovieList className="MovieList" movies={searchResult} />

      <Moviecard className="MovieCard" addMovie={addMovie} />
    </>
  );
};

export default App;
