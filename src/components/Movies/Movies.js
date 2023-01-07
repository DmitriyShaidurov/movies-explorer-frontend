import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <div className="saved-movies__container">
        <MoviesCardList />
        <button className="movies__button-more" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
