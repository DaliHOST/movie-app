import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Rater from "./MoviefilterRate";

function Movieadd(props) {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });

  function getrate(str) {
    newMovie.rating = str;
  }

  function handleChange(e) {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Write your movie's info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="title"
            placeholder="The title"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="posterUrl"
            placeholder="Poster Url"
            onChange={handleChange}
          ></input>
          <Rater handle={getrate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              props.handleChange(newMovie);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Movieadd;