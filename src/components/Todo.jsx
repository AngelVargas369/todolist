import React from "react";
import "../styles/Todo.css";

const Todo = ({ title, status, id, cambiarEstado }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <button onClick={() => cambiarEstado(id)}>
        {status ? "completado" : "incompleta"}
      </button>
    </div>
  );
};

export default Todo;
