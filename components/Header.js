import React from "react";
import HeaderStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={HeaderStyle.title}>
        <span>Web Dev </span> News
      </h1>
      <p className={HeaderStyle.description}>
        Keep up to date for the latest Web-Dev News
      </p>
    </div>
  );
};

export default Header;
