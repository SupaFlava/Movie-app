import { Modal, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Moviecard({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTitle, setNewTitle] = useState("");
  const added = () => {
    addMovie({
      Title: newTitle,
      Poster: newImg,
      Year: newYear,
      Rating: newRating,
    });
  };
  const [newYear, setNewYear] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newImg, setNewImg] = useState("");

  return (
    <>
      <div className="AddBtn">
        <Button variant="primary" onClick={handleShow}>
          Add A movie
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label className="input">Title</label>
            <input
              type="text"
              value={newTitle}
              name="Title"
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label className="input">Year</label>
            <input
              type="text"
              name="Year"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
            />
          </div>
          <div>
            <label className="input">Poster</label>
            <input
              type="text"
              name="poster"
              src={newImg}
              onChange={(e) => setNewImg(e.target.value)}
            />
            <label className="input">Rating</label>
            <input
              type="text"
              name="rating"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={added}>
            Add!!!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Moviecard;
