import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__main">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <Navigation />
        {/* <div className="header__main-container">
          <Link to="/signup">
            <button className="header__signup">Регистрация</button>
          </Link>
          <Link to="/signin">
            <button className="header__signin">Войти</button>
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
