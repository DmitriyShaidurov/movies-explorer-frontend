import React from "react";
import "./AboutMe.css";
import myPhoto from "../../images/myPhoto.jpg";

function AboutMe() {
  return (
    <section id="student" className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__content">
          <h3 className="aboutMe__subtitle">Дмитрий</h3>
          <p className="aboutMe__age">Фронтенд-разработчик, 27 лет</p>
          <p className="aboutMe__text">Я родился и живу в Стерлитамаке.</p>
          <div className="aboutMe__links">
            <a className="aboutMe__link" href="https://github.com/DmitriyShaidurov">
              Github
            </a>
          </div>
        </div>
        <img className="aboutMe__image" src={myPhoto} alt="student" />
      </div>
    </section>
  );
}

export default AboutMe;
