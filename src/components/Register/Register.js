import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Preloader from "../Preloader/Preloader";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister({ name, email, password });
  }

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__container-image">
          <Link to="/">
            <img className="register__image" src={logo} alt="logo" />
          </Link>
        </div>

        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__inputName-container">
            <p className="register__inputName">Имя</p>
            <input
              onChange={nameHandler}
              required
              minLength="2"
              className="register__input"
              type="name"
              id="registerName"
              value={name}
              name="name"
            />
          </div>

          <div className="register__inputName-container">
            <p className="register__inputName">E-mail</p>
            <input
              required
              className="register__input"
              type="email"
              id="registerEmail"
              value={email}
              name="email"
              onChange={emailHandler}
            />
          </div>

          <div className="register__inputName-container">
            <p className="register__inputName">Пароль</p>
            <input
              minLength="8"
              required
              className="register__input"
              type="password"
              id="registerPassword"
              value={password}
              name="name"
              onChange={passwordHandler}
            />
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
      {props.Preloader && <Preloader />}
    </section>
  );
}

export default Register;

/* server {
  listen 80;

  server_name api.dmitriysh.nomoredomains.club;

  location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
  }

listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/api.dmitriysh.nomoredomains.club/full>
ssl_certificate_key /etc/letsencrypt/live/api.dmitriysh.nomoredomains.club/>
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

} */
