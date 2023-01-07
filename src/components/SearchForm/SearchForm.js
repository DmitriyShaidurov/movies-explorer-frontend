import React, { useState } from "react";
import "./SearchForm.css";
import liked from "../../images/tumbler.svg";
import notLiked from "../../images/disTumbler.svg";

function SearchForm() {
  const [isFilter, setIsFilter] = useState(false);

  function handleSwitchFilter() {
    setIsFilter(!isFilter);
  }

  return (
    <div className="search">
      <form className="search__form">
        <input required className="search__input" type="text" name="search" id="searchFilm" placeholder="Фильм" />
        <button className="search__submit">Найти</button>
      </form>
      <div className="search__filter-container">
        <button onClick={handleSwitchFilter} className="search__filter-button">
          <img className="search__filter" src={isFilter ? liked : notLiked} alt="Фильтр" />
        </button>
        <p className="search__filter-text">Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
