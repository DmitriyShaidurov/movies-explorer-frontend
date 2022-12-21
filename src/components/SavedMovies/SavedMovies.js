import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
// import primer from "../../images/primer.svg";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <div className="saved-movies__container">
        <MoviesCardList />
        {/* <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div> */}
      </div>
      <Footer />
    </section>
  );
}
export default SavedMovies;
