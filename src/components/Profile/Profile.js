import React, { useState, useEffect } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
    };
    props.handleUpdateProfile(data);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__inputName-container">
          <p className="profile__inputName">Имя</p>
          <input
            className="profile__input"
            id="profileName"
            type="name"
            name="profile-name"
            placeholder="Имя пользователя"
            onChange={handleName}
            value={name}
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
            onChange={handleEmail}
            value={email}
          />
        </div>
        {props.profileSuccessful && <span className="profile__form-successful">Ваш профиль был успешно изменен.</span>}
        <button
          className={
            currentUser.email !== email || currentUser.name !== name
              ? "profile__button"
              : "profile__button profile__button_blur"
          }
        >
          Редактировать
        </button>
      </form>
      <Link to="/">
        <button className="profile__button profile__button_logout" onClick={props.signOut}>
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
}
export default Profile;
