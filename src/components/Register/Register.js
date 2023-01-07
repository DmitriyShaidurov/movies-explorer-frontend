import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__container-image">
          <Link to="/">
            <img className="register__image" src={logo} alt="logo" />
          </Link>
        </div>

        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <div className="register__inputName-container">
            <p className="register__inputName">Имя</p>
            <input required minLength="2" className="register__input" type="name" id="registerName" />
          </div>

          <div className="register__inputName-container">
            <p className="register__inputName">E-mail</p>
            <input required className="register__input" type="email" id="registerEmail" />
          </div>

          <div className="register__inputName-container">
            <p className="register__inputName">Пароль</p>
            <input minLength="8" required className="register__input" type="password" id="registerPassword" />
          </div>
          <button className="register__submit" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__content">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link to="/signin">
            <button className="register__sign-in">Войти</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
