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
  const [profileSuccessful, setProfileSuccessful] = useState(false);
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
            console.log(m);
            return m.owner.id === currentUser._id;
          });
          setSavedMovies(currentUserSavedMovies);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [isLoggedIn]);

  const handleSaveMovie = (movie) => {
    saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const movieId = movie._id
      ? movie._id
      : savedMovies.find((item) => {
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

  const toggleLike = (movie, added) => (added ? handleSaveMovie(movie) : handleDeleteMovie(movie));

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
        setProfileSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
        setProfileSuccessful(false);
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
    localStorage.removeItem("input");
    localStorage.removeItem("filterDur");
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

          <Route path="/signup" exact>
            <Register handleRegister={handleRegister} preloader={preloader} />
          </Route>
          <Route path="/signin" exact>
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
          <ProtectedRoute exact path="/profile" isLoggedIn={isLoggedIn}>
            <Header
              isListOpen={isListOpen}
              handleCloseList={handleCloseList}
              handleOpenList={handleOpenList}
              isLoggedIn={isLoggedIn}
            />
            <Profile
              signOut={handleSignOut}
              handleUpdateProfile={handleUpdateProfile}
              profileSuccessful={profileSuccessful}
            />
          </ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

/* server {
  listen 80;

  server_name api.dmitriysh.nomoredomains.club;

 root /home/dmitriysh/movies-frontend;

  location / {

      try_files $uri $uri/ /index.html;
  }


  location /api/ {
            proxy_pass http://localhost:3001/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
  }

listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/api.dmitriysh.nomoredomains.club/fullchain.pem; # managed by Certbot
ssl_certificate_key /etc/letsencrypt/live/api.dmitriysh.nomoredomains.club/privkey.pem; # managed by Certbot
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

} */

//

/* server {
  listen 80;

  server_name dmitriy47.students.nomoredomains.icu;

#       root /home/dmitriysh/react-mesto-api-full;

  location / {
          proxy_pass http://localhost:3001;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
  }


listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/dmitriy47front.nomoredomains.club/fullchain.pem; # managed by Certbot
ssl_certificate_key /etc/letsencrypt/live/dmitriy47front.nomoredomains.club/privkey.pem; # managed by Certbot
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
  listen 80;

  server_name dmitriy47front.nomoredomains.club;

  root /home/dmitriysh/react-mesto-api-full;

  location / {

          try_files $uri $uri/ /index.html;
  }

listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/dmitriy47front.nomoredomains.club/fullchain.pem; # managed by Certbot
ssl_certificate_key /etc/letsencrypt/live/dmitriy47front.nomoredomains.club/privkey.pem; # managed by Certbot
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

} */
