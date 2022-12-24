import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <div className="saved-movies__container">
        <MoviesCardList />
      </div>
      <Footer />
    </section>
  );
}
export default SavedMovies;
