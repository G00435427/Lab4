
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios"; // Imports axios

// Function that fetches and displays the movie data
function Read() {
  // Creates state to store the movies returned by the API
  const [movies, setMovies] = useState([]);

  // Runs the effect when the component loads
  useEffect(() => {
    // Sends an HTTP GET request to retrieve the movie data
    axios
      .get("https://data-rep-mern-application.github.io/dataserver/movies.json")
      .then((response) => {
        // Stores the movie array from the API
        setMovies(response.data.myArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* Passes the movie data to the Movies component */}
      <Movies movies={movies} />
    </div>
  );
}

export default Read;
