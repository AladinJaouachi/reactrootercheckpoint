
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MovieCard = ({ film }) => {
 
  return (
    <>
    <Link to={`/${film.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={film.stream_img} />
        <Card.Body>
          <Card.Title>{film.stream_name}</Card.Title>
          <Card.Text>
            {film.descrip}
          </Card.Text>
          <Card.Title>{film.rate}</Card.Title>

        </Card.Body>
      </Card>
      </Link>
    </>
  );
};

export default MovieCard;
