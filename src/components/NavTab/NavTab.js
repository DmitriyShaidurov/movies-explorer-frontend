import "./NavTab.css";
import React from "react";

function NavTab() {
  return (
    <div className="navTab">
      <div className="navTab__list">
        <a href="#about-project" className="navTab__about">
          О проекте
        </a>
        <a href="#tech" className="navTab__about">
          Технологии{" "}
        </a>
        <a href="#student" className="navTab__about">
          Студент
        </a>
      </div>
    </div>
  );
}

export default NavTab;
