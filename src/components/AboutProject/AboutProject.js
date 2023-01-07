import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
    <section id="about-project" className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__content">
        <div className="project__content-table">
          <h2 className="project__content-title">Дипломный проект включал 5 этапов</h2>
          <p className="project__content-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__content-table">
          <h2 className="project__content-title">На выполнение диплома ушло 5 недель</h2>
          <p className="project__content-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__time-line">
        <div className="project__time-line-first-container">
          <div className="project__time-line-first">
            <p className="project__time-line-first-text">1 неделя</p>
          </div>
          <div className="project__time-line-second">
            <p className="project__time-line-second-text">4 недели</p>
          </div>
        </div>
        <div className="project__time-line-second-container">
          <p className="project__time-line-first-under">Back-end</p>
          <p className="project__time-line-second-under">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
