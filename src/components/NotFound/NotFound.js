import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <Link to="/">
        <button className="not-found__button">Назад</button>
      </Link>
    </div>
  );
}
export default NotFound;
