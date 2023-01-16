import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import MoviesSavedCardList from "./MoviesSavedCardList";
import SearchForm from "../SearchForm/SearchForm";
import { durationMovie } from "../../utils/const";
import Footer from "../Footer/Footer";

function SavedMovies({ toggleLike, movieAdded, savedMovies }) {
  const [showFoundMovies, setShowFoundMovies] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [filter, setfilter] = useState(false);

  useEffect(() => {
    setShowFoundMovies(savedMovies);
  }, [savedMovies]);

  const filterMovies = (movies) => movies.filter((item) => item.duration < durationMovie);

  const onFilter = () => {
    setfilter(!filter);
  };

  function searchMovies(data) {
    setPreloader(true);
    const filteredMovies = savedMovies.filter((movie) => {
      return (
        movie.description?.toLowerCase().includes(data.toLowerCase()) ||
        movie.director?.toLowerCase().includes(data.toLowerCase()) ||
        movie.nameEN?.toLowerCase().includes(data.toLowerCase()) ||
        movie.nameRU?.toLowerCase().includes(data.toLowerCase())
      );
    });

    setShowFoundMovies(filteredMovies);
    localStorage.setItem("allMovies", JSON.stringify(filteredMovies));

    setTimeout(() => {
      setPreloader(false);
    }, 300);
  }

  return (
    <section className="saved-movies">
      <SearchForm searchMovies={searchMovies} filter={filter} onFilter={onFilter} />
      <div className="saved-movies__container">
        {savedMovies.length !== 0 || showFoundMovies.length !== 0 ? (
          <MoviesSavedCardList
            showFoundMovies={filter ? filterMovies(showFoundMovies) : showFoundMovies}
            toggleLike={toggleLike}
            preloader={preloader}
            movieAdded={movieAdded}
          />
        ) : (
          <h3 className="text-nothing-found">Ничего не найдено</h3>
        )}
        ;
      </div>
      <Footer />
    </section>
  );
}
export default SavedMovies;
