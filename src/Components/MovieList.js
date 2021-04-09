import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ReactStars from "react-rating-stars-component";
import Container from "react-bootstrap/Container";

const MovieList = ({ movies }) => {
  return (
    <CardDeck style={{ width: "80vw", height: "20vh", marginLeft: "1rem" }}>
      {movies.map((movie) => (
        <Card bg="light" style={{ border: "#ffd700 solid 2px" }}>
          <Card.Body>
            <Card.Img
              style={{ height: "250px", width: "250px" }}
              src={movie.Poster}
              alt="movie"
            />
            <Card.Title style={{ color: "#FFF", marginTop: "1rem" }}>
              {movie.Title}
            </Card.Title>
            <Card.Subtitle>{movie.description}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <Card.Text>Year: {movie.Year}</Card.Text>

            <ReactStars value={movie.Rating} size={24} />
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
};

export default MovieList;
