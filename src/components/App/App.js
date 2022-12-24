import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import NotFound from "../NotFound/NotFound";
// Есть проблемы с расширением на 320, завтра все недочеты с расширением и недочеты по проекту исправлю.
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);

  function handleCloseList() {
    setIsListOpen(false);
  }

  function handleOpenList() {
    setIsListOpen(true);
  }

  return (
    <div className="App">
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
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>

        <Route exact path="/movies">
          <Header
            isListOpen={isListOpen}
            handleCloseList={handleCloseList}
            handleOpenList={handleOpenList}
            isLoggedIn={isLoggedIn}
          />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header
            isListOpen={isListOpen}
            handleCloseList={handleCloseList}
            handleOpenList={handleOpenList}
            isLoggedIn={isLoggedIn}
          />
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Header
            isListOpen={isListOpen}
            handleCloseList={handleCloseList}
            handleOpenList={handleOpenList}
            isLoggedIn={isLoggedIn}
          />
          <Profile />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
