
import { useState } from "react";

function Create() {
  // State for storing the movie title
  const [title, setTitle] = useState("");
  // State for storing the movie release year
  const [year, setYear] = useState("");
  // State for storing the movie poster URL
  const [poster, setPoster] = useState("");

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logs movie details to the console
    console.log(title);
    console.log(year);
    console.log(poster);
  };

  return (
    <div>
      <h2>This is my Create Component.</h2>
    // form for movie details
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            // Updates the title state when the input changes
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            // Updates the year state when the input changes
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            // Updates the poster state when the input changes
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        {/* Button to submit the movie details */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}
// Exports the Create component

export default Create;
