import React, { useEffect, useState } from "react";
import "../MoviesCardList/MoviesCardList";
import MoviesCardSaved from "./MoviesCardSaved";
import Preloader from "../Preloader/Preloader";
import { desktop, phone } from "../../utils/const";

function MoviesCardList({ showFoundMovies, preloader, toggleLike, movieAdded }) {
  return (
    <div className="card-list">
      {showFoundMovies.length !== 0 ? (
        <>
          {preloader ? (
            <Preloader />
          ) : (
            <>
              {showFoundMovies.map((item, index) => {
                return (
                  <MoviesCardSaved
                    key={index}
                    card={item}
                    toggleLike={toggleLike}
                    showFoundMovies={showFoundMovies}
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
    </div>
  );
}

export default MoviesCardList;
