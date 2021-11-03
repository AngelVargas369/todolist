import React from "react";
import "../styles/Header.css";

const Header = ({ handleFilter }) => {
  return (
    <div className="header-todo">
      <div className="card">
        <h1>todolist</h1>
        <button onClick={() => handleFilter(null)}>todo</button>
        <button onClick={() => handleFilter(true)}>completas</button>
        <button onClick={() => handleFilter(false)}>incompleta</button>
      </div>
    </div>
  );
};

export default Header;
