import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ Data, searchTitleFilm, searchRateFilm }) => {
  return (
    <div className="Father">
      {Data.filter((film) => {
        return (
          film.stream_name.toLowerCase().includes(searchTitleFilm) &&
          (!searchRateFilm || film.rate >= searchRateFilm)
        );
      }).map((filterfilm) => (
        <MovieCard key={filterfilm.id} film={filterfilm} />
      ))}
    </div>
  );
};

export default MovieList;
