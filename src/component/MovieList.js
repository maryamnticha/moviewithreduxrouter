import React from "react";
import { connect } from "react-redux";
import MovieCard from "../component/movieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies, searchInput, ratingInput }) => {
  console.log("movies", movies);
  console.log("ratingInput", ratingInput);
  return (
    <div className="movie-list">
      {(ratingInput > 1
        ? movies.filter(el => el.rating == ratingInput)
        : movies.filter(el =>
            el.title
              .trim()
              .toLowerCase()
              .includes(searchInput)
          )
      ).map((movie, key) => (
        <div>
          <MovieCard className="Cards" movie={movie} key={key} />
          <Link to={`/description/${movie.id}`}>Movie Description</Link>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    movies: state.movies,
    searchInput: state.searchInput,
    ratingInput: state.ratingInput
  };
};

export default connect(mapStateToProps)(MovieList);
