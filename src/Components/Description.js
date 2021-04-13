import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

const Description = ({ movies }) => {
  const { id } = useParams();

  const [film, setFilm] = useState(movies);

  useEffect(() => {
    const newFilm = movies.filter((movie) => movie.ID === id);
    setFilm(newFilm);
  }, [id]);

  return (
    <>
      {film.map((f) => (
        <div style={{ backgroundColor: "#ffd700" }}>
          <iframe
            style={{
              width: "560px",
              height: "315px",
              border: "2px , solid , white",
            }}
            src={f.Trailer}
          ></iframe>

          <h1>{f.Title}</h1>
          <span>{f.Year}</span>

          <h4>{f.description}</h4>
        </div>
      ))}
    </>
  );
};

export default Description;
