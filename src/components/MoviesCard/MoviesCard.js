import React from "react";
import "./MoviesCard.css";
import primer from "../../images/primer.svg";
import { MOVIE_URL } from "../../utils/const";
import { Route } from "react-router-dom";

function MoviesCard({ card, toggleLike, movieAdded }) {
  let added = movieAdded(card);

  function handleSaveCard(e) {
    e.preventDefault();
    toggleLike(card, !added);
    /* e.target.classList.toggle("card__save_active"); */
  }

  return (
    <>
      <Route path="/movies">
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">{card.nameRU}</h2>
              <p className="card__subtitle">{card.duration}</p>
            </div>
            <button
              onClick={handleSaveCard}
              type="button"
              className={added ? "card__save_active card__save" : "card__save"}
            />
          </div>
          <a href={card.trailerLink} rel="noreferrer" target="_blank">
            <img className="card__image" src={`${MOVIE_URL}` + card.image.url} alt="Обложка" />
          </a>
        </div>
      </Route>
    </>
  );
}

export default MoviesCard;
