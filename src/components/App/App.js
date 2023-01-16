import "./App.css";
import {
  register,
  authorize,
  getSavedMovies,
  getUser,
  deleteMovie,
  updateProfile,
  saveMovie,
  checkToken,
} from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);
  const [preloader, setPreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  function handleCloseList() {
    setIsListOpen(false);
  }

  function handleOpenList() {
    setIsListOpen(true);
  }

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          history.push(location.pathname);
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          history.push("/signin");
          console.log("error", err);
        });
    }
  }, []);

  // Логин

  function handleSignin(email, password) {
    setPreloader(true);
    return authorize(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        history.push("/");
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setPreloader(false);
        }, 300);
      });
  }

  // Регистрация

  function handleRegister({ name, email, password }) {
    console.log(name, email, password);
    setPreloader(true);
    return register(name, email, password)
      .then((res) => {
        if (res) {
          handleSignin(email, password);
        }
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setTimeout(() => {
          setPreloader(false);
        }, 300);
      });
  }

  useEffect(() => {
    setPreloader(true);
    if (isLoggedIn) {
      Promise.all([getUser(), getMovies(), getSavedMovies()])
        .then(([user, moviesList, saveMovie]) => {
          setCurrentUser(user);
          setMovies(moviesList);
          const currentUserSavedMovies = saveMovie.filter((m) => {
            return m.owner._id === currentUser._id;
          });
          setSavedMovies(currentUserSavedMovies);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [isLoggedIn, currentUser._id]);

  const handleSaveMovie = (movie) => {
    console.log(movie);
    saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    /* console.log(movie.movieId); */
    const movieId = movie._id
      ? movie._id
      : savedMovies.find((item) => {
          console.log(item);
          return item.movieId === movie.id;
        })._id;

    deleteMovie(movieId)
      .then((res) => {
        if (res.message === "Фильм удалён") {
          const newArray = savedMovies.filter((item) => {
            return item._id !== movieId;
          });
          setSavedMovies([...newArray]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* const toggleLike = (movie, added) => (added ? handleSaveMovie(movie) : handleDeleteMovie(movie)); */
  const toggleLike = (movie) => handleSaveMovie(movie);

  const movieAdded = (movie) => {
    return savedMovies.find((item) => {
      return movie._id ? item._id === movie._id : item.movieId === movie.id;
    });
  };

  useEffect(() => {
    const allMoviesArray = JSON.parse(localStorage.getItem("allMovies"));
    if (allMoviesArray) {
      setMoviesList(allMoviesArray);
    }
  }, []);

  // Обновление профиля
  function handleUpdateProfile({ name, email }) {
    setPreloader(true);
    updateProfile({ name: name, email: email })
      .then((res) => {
        setPreloader(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setPreloader(false);
        }, 300);
      });
  }

  //

  function searchMovies(data) {
    setPreloader(true);
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.description?.toLowerCase().includes(data.toLowerCase()) ||
        movie.director?.toLowerCase().includes(data.toLowerCase()) ||
        movie.nameEN?.toLowerCase().includes(data.toLowerCase()) ||
        movie.nameRU?.toLowerCase().includes(data.toLowerCase())
      );
    });

    setMoviesList(filteredMovies);
    localStorage.setItem("allMovies", JSON.stringify(filteredMovies));

    setTimeout(() => {
      setPreloader(false);
    }, 300);
  }

  // Выход

  function handleSignOut() {
    setPreloader(false);
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setMovies([]);
    handleCloseList();
    history.push("/");
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header
              isListOpen={isListOpen}
              handleCloseList={handleCloseList}
              handleOpenList={handleOpenList}
              isLoggedIn={isLoggedIn}
              isMainPage={isMainPage}
            />
            <Main />
            <Footer />
          </Route>

          <Route path="/signup">
            <Register handleRegister={handleRegister} preloader={preloader} />
          </Route>
          <Route path="/signin">
            <Login handleAuth={handleSignin} />
          </Route>
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/movies" exact>
            <Header
              isListOpen={isListOpen}
              handleCloseList={handleCloseList}
              handleOpenList={handleOpenList}
              isLoggedIn={isLoggedIn}
            />
            <Movies
              searchMovies={searchMovies}
              moviesList={moviesList}
              preloader={preloader}
              toggleLike={toggleLike}
              movieAdded={movieAdded}
              savedMovies={savedMovies}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" isLoggedIn={isLoggedIn}>
            <Header
              isListOpen={isListOpen}
              handleCloseList={handleCloseList}
              handleOpenList={handleOpenList}
              isLoggedIn={isLoggedIn}
            />
            <SavedMovies savedMovies={savedMovies} movieAdded={movieAdded} toggleLike={toggleLike} />
          </ProtectedRoute>
          <Route exact path="/profile">
            <Header
              isListOpen={isListOpen}
              handleCloseList={handleCloseList}
              handleOpenList={handleOpenList}
              isLoggedIn={isLoggedIn}
            />
            <Profile signOut={handleSignOut} handleUpdateProfile={handleUpdateProfile} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
