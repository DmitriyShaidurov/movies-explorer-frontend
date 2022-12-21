import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import profileLink from "../../images/icon-main.svg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <div className="navigation__films">
          <NavLink
            activeClassName="navigation__button_font"
            className="navigation__button navigation__button_margin-zero"
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink activeClassName="navigation__button_font" className="navigation__button" to="/saved-movies">
            Сохраненые фильмы
          </NavLink>
        </div>
        <NavLink
          activeClassName="navigation__button_font"
          className="navigation__button navigation__button_margin"
          to="/profile"
        >
          Аккаунт
          <img className="navigation__profile-icon" src={profileLink} alt="profile" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
