import React from "react";
import "./MoviesCard.css";
import primer from "../../images/primer.svg";
import { Route } from "react-router-dom";

function MoviesCard() {
  function handleSaveCard(e) {
    e.target.classList.toggle("card__save_active");
  }

  return (
    <>
      <Route path="/movies">
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button onClick={handleSaveCard} type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button onClick={handleSaveCard} type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button onClick={handleSaveCard} type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button onClick={handleSaveCard} type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button onClick={handleSaveCard} type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button onClick={handleSaveCard} type="button" className="card__save" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button type="button" className="card__delete" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button type="button" className="card__delete" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
        <div className="card">
          <div className="card__content">
            <div className="card__container-text">
              <h2 className="card__title">33 слова o дизайне</h2>
              <p className="card__subtitle">1ч 42м</p>
            </div>
            <button type="button" className="card__delete" />
          </div>
          <img className="card__image" src={primer} alt="Обложка" />
        </div>
      </Route>
    </>
  );
}

export default MoviesCard;
