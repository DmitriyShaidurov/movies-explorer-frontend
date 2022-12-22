import React from "react";
import "./List.css";
import exit from "../../images/closeList.svg";
import { NavLink } from "react-router-dom";
import profileLink from "../../images/linkprofile.svg";

function List(props) {
  let activeList = "";
  if (props.isListOpen) {
    activeList = "list_active";
  } else {
    activeList = "";
  }
  return (
    <div className={`list ${activeList}`}>
      <div className="list__container">
        <button onClick={props.handleCloseList} className="list__exit">
          <img className="list__exit-icon" src={exit} alt="exit-list" />
        </button>
        <ul className="list__content">
          <NavLink activeClassName="list__link-active" className="list__link" to="/" exact>
            Главная
          </NavLink>
          <NavLink activeClassName="list__link-active" className="list__link" to="/movies">
            Фильмы
          </NavLink>
          <NavLink activeClassName="list__link-active" className="list__link" to="/saved-movies">
            Сохраненые фильмы
          </NavLink>
        </ul>
        <button className="list__link-button">
          <NavLink activeClassName="list__link-active" className="list__link-profile" to="/profile">
            Аккаунт
          </NavLink>
          <img className="list__profile-icon" src={profileLink} alt="profile" />
        </button>
      </div>
    </div>
  );
}

export default List;
