import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { desktop, phone } from "../../utils/const";

function MoviesCardList({ moviesList, preloader, toggleLike, movieAdded }) {
  const [showMoviesList, setShowMoviesList] = useState([]);
  let calculator;

  function getQuantity(listWidth) {
    if (listWidth >= desktop) {
      return { first: 7, next: 3 };
    } else {
      return { first: 5, next: 3 };
    }
  }

  const sizeHandler = () => {
    const listWidth = window.innerWidth;
    const calculatorFirst = getQuantity(listWidth);
    if (!calculator || calculator.first !== calculatorFirst.first) {
      calculator = calculatorFirst;
      setShowMoviesList(moviesList.slice(0, calculator.first));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", sizeHandler);
    return () => {
      window.removeEventListener("resize", sizeHandler);
    };
  }, []);

  useEffect(() => {
    const windowSize = window.innerWidth;
    const calculatorFirst = getQuantity(windowSize);
    calculator = calculatorFirst;
    setShowMoviesList(moviesList.slice(0, calculator.first));
  }, [moviesList]);

  useEffect(() => {
    sizeHandler();
  }, []);

  function showMore() {
    const windowSize = window.innerWidth;
    const addMoreCards = getQuantity(windowSize);
    calculator = addMoreCards;
    const last = showMoviesList.length;
    setShowMoviesList(showMoviesList.concat(moviesList.slice(last, last + calculator.next)));
  }

  return (
    <div className="card-list">
      {showMoviesList.length !== 0 ? (
        <>
          {preloader ? (
            <Preloader />
          ) : (
            <>
              {showMoviesList.map((item) => {
                return (
                  <MoviesCard
                    card={item}
                    key={item.id}
                    toggleLike={toggleLike}
                    moviesList={moviesList}
                    movieAdded={movieAdded}
                  />
                );
              })}
            </>
          )}
        </>
      ) : (
        <h3 className="text-nothing-found">Ничего не найдено</h3>
      )}
      <button className="movies__button-more" type="button" onClick={showMore}>
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
