import React from "react";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ReactStars from "react-rating-stars-component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <CardColumns bg="danger">
          <Card bg="light" border="info " style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img src={movie.Poster} alt="movie" />
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Year}</Card.Text>
              <span>{movie.imdbID} </span>
              <ReactStars value={movie.Rating} size={24} />
            </Card.Body>
          </Card>
        </CardColumns>
      ))}
    </>
  );
};

export default MovieList;
