import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import List from "../List/List";
import profileLink from "../../images/icon-main.svg";
import listClosed from "../../images/listClosed.svg";

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="navigation__films">
          <NavLink className="navigation__button navigation__button_margin-zero" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="navigation__button" to="/saved-movies">
            Сохраненые фильмы
          </NavLink>
        </div>
        <NavLink className="navigation__button navigation__button_margin" to="/profile">
          Аккаунт
          <img className="navigation__profile-icon" src={profileLink} alt="profile" />
        </NavLink>
      </div>
      <button onClick={props.handleOpenList} className="navigation__list">
        <img className="navigation__list-icon" src={listClosed} alt="list" />
      </button>
      <List isListOpen={props.isListOpen} handleCloseList={props.handleCloseList} />
    </div>
  );
}

export default Navigation;
