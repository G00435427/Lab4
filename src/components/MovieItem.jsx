
import React from "react";
import Card from "react-bootstrap/Card";

function MovieItem(props) {
  return (
    <div>
        {/* Creates a card to display the movie details */}
      <Card style={{ width: "18rem", margin: "10px" }}>
        {/* Displays the movie title in the card header */}
        <Card.Header>
          {props.mymovie.Title}
        </Card.Header>
        {/* Displays the movie poster image */}
        <Card.Body>
          <Card.Img
            variant="top"
            src={props.mymovie.Poster}
            alt={props.mymovie.Title}
          />
        </Card.Body>
            {/* Displays the movie release year in the card footer */}
        <Card.Footer>
          {props.mymovie.Year}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default MovieItem;
