import React, { useState, useEffect } from "react";

import MovieList from "./Components/MovieList";

import Moviecard from "./Components/Moviecard";
import Ratings from "./Components/Ratings";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./Components/Description";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      ID: "tt0076759",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      Rating: 5,
      Trailer: "https://youtu.be/NmzuHjWmXOc",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      Title: "Nobody",
      Year: "2021",
      ID: "tt0086190",
      description:
        "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.",
      Rating: 2,
      Trailer: " https://www.youtube.com/embed/_8pNQzqSqHE",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      Title: "Mortal Kombat",
      Year: "2021",
      ID: "tt0080684",
      description:
        "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
      Rating: 4,
      Trailer: "https://www.youtube.com/embed/QJHY4ggYCk4",
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
    <Router>
      <>
        <div className="NavBar">
          <input
            className="Input"
            type="text"
            placeholder="search..."
            value={search}
            onChange={filterMovies}
          />
          <h1 className="Title">GoMyMovie </h1>

          <Ratings className="RatingStar" getStar={getStar} />
        </div>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MovieList className="MovieList" movies={searchResult} />
            )}
          />
          <Route
            path="/description/:id"
            exact
            render={(props) => <Description movies={movies} />}
          />
        </Switch>
        <Moviecard className="MovieCard" addMovie={addMovie} />
      </>
    </Router>
  );
};

export default App;
