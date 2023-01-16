import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { durationMovie } from "../../utils/const";

function Movies({ searchMovies, moviesList, preloader, toggleLike, movieAdded }) {
  const [filter, setFilter] = useState(false);

  const moviesFilter = (movies) =>
    movies.filter((obj) => {
      return obj.duration <= durationMovie;
    });

  const toggleFilterDuration = () => {
    setFilter(!filter);
  };

  return (
    <section className="movies">
      <SearchForm searchMovies={searchMovies} filter={filter} toggleFilterDuration={toggleFilterDuration} />
      <div className="saved-movies__container">
        <MoviesCardList
          moviesList={filter ? moviesFilter(moviesList) : moviesList}
          preloader={preloader}
          toggleLike={toggleLike}
          movieAdded={movieAdded}
        />
      </div>
    </section>
  );
}

export default Movies;
