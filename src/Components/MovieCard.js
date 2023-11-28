import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { deleteMovie } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movieInfo }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteMovie(movieInfo.id));
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title> {movieInfo.title} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
        </Card.Body>
        <Rating name="read-only" readOnly max={10} value={movieInfo.rating} />
        <Button variant="dark">
          <Link
            style={{ textDecoration: "none" }}
            to={`/details/${movieInfo.id}`}
          >
            More Details
          </Link>
        </Button>
        <Button variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </Card>
      <br />
    </div>
  );
};

export default MovieCard;
