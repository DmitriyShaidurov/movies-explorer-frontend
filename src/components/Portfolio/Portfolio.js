import React from "react";
import "./Portfolio.css";
import link from "../../images/portLink.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__container">
        <a
          href="https://dmitriyshaidurov.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link"
        >
          <p className="portfolio__link-text">Статичный сайт</p>
          <img className="portfolio__link-image" src={link} alt="link" />
        </a>
        <a
          href="https://dmitriyshaidurov.github.io/russian-travel/index.html"
          rel="noreferrer"
          target="_blank"
          className="portfolio__link"
        >
          <p className="portfolio__link-text ">Адаптивный сайт</p>
          <img className="portfolio__link-image" src={link} alt="link" />
        </a>
        <a
          href=" https://dmitriy47front.nomoredomains.club"
          rel="noreferrer"
          target="_blank"
          className="portfolio__link"
        >
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <img className="portfolio__link-image" src={link} alt="link" />
        </a>
      </div>
    </section>
  );
}
export default Portfolio;
