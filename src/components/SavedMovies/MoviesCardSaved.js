import React, { useEffect, useState } from "react";
import "../MoviesCard/MoviesCard";
import { Route } from "react-router-dom";
import { desktop } from "../../utils/const";

function MoviesCard({ card, toggleLike, movieAdded }) {
  let added = movieAdded(card);

  function handleSaveCard(e) {
    e.preventDefault();
    toggleLike(card, !added);
  }

  function timeChanger(data) {
    let hour = Math.trunc(data / 60);
    let minute = data % 60;
    return hour + "ч " + minute + "м";
  }

  return (
    <>
      <>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">{card.nameRU}</h2>
              <p className="card__subtitle">{timeChanger(card.duration)}</p>
            </div>
            <button
              onClick={handleSaveCard}
              type="button"
              className={added ? "card__saved_active card__save" : "card__save"}
            />
          </div>
          <a href={card.trailerLink} rel="noreferrer" target="_blank">
            <img className="card__image" src={card.image} alt="Обложка" />
          </a>
        </div>
      </>
    </>
  );
}

export default MoviesCard;
