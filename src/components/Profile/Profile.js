import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Дмитрий!</h2>
      <form className="profile__form">
        <div className="profile__inputName-container">
          <p className="profile__inputName">Имя</p>
          <input
            className="profile__input"
            id="profileName"
            type="name"
            name="profile-name"
            placeholder="Имя пользователя"
          />
        </div>
        <div className="profile__inputName-container">
          <p className="profile__inputName">Почта</p>
          <input
            className="profile__input"
            id="profileEmail"
            type="email"
            name="profile-email"
            placeholder="Почта пользователя"
          />
        </div>
      </form>
      <button className="profile__button">Редактировать</button>
      <Link to="/">
        <button className="profile__button profile__button_logout">Выйти из аккаунта</button>
      </Link>
    </section>
  );
}
export default Profile;
