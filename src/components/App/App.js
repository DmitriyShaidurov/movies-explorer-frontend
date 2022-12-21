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
// import { useEffect, useState } from 'react';
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header></Header>
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
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          {/* <Footer /> */}
        </Route>
        <Route exact path="/profile">
          <Header />
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
