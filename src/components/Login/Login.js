import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__image-container">
          <Link to="/">
            <img className="login__image" src={logo} alt="logo" />
          </Link>
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <div className="login__inputName-container">
            <p className="login__inputName">E-mail</p>
            <input
              required
              className="login__input"
              type="email"
              name="login-email"
              placeholder="E-mail"
              id="loginEmail"
            />
          </div>

          <div className="login__inputName-container">
            <p className="login__inputName">Пароль</p>
            <input
              required
              className="login__input"
              type="password"
              name="login-password"
              placeholder="Пароль"
              id="loginPassword"
            />
          </div>
          <button className="login__submit" type="submit">
            Войти
          </button>
        </form>
        <div className="login__content">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link to="/signup">
            <button className="login__signup">Регистрация</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
