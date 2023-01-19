import React, { useState } from "react";
import "./SearchForm.css";
import liked from "../../images/tumbler.svg";
import notLiked from "../../images/disTumbler.svg";

function SearchForm({ searchMovies, toggleFilterDuration, filter }) {
  const [text, setText] = useState("");

  function textHandler(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchMovies(text);
    localStorage.setItem("input", text);
  }
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          required
          className="search__input"
          type="text"
          name="search"
          id="searchFilm"
          placeholder="Фильм"
          onChange={textHandler}
          value={text.length !== 0 ? text : localStorage.getItem("input")}
        />
        <button className="search__submit">Найти</button>
      </form>
      <div className="search__filter-container">
        <button onClick={toggleFilterDuration} className="search__filter-button">
          <img className="search__filter" src={filter ? liked : notLiked} alt="Фильтр" />
        </button>
        <p className="search__filter-text">Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
