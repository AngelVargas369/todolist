import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App = () => {
  const [data, setData] = useState([]);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();

      const resultTotal = result.slice(0, 20);
      setData(resultTotal);
      setFiltro(resultTotal);
    };
    handleData();
  }, []);

  const handleFilterApp = (estado) => {
    if (estado === null) {
      setFiltro(data);
    } else if (estado === true) {
      setFiltro(data.filter((z) => z.completed === true));
    } else if (estado === false) {
      setFiltro(data.filter((z) => z.completed === false));
    }
    console.log(filtro);
  };

  const changeEstatus = (id) => {
    setData(
      data.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
    );
    setFiltro(
      filtro.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
    );
  };

  return (
    <div>
      <Header handleFilter={handleFilterApp} />

      <div className="contenedor-tarjetas">
        {filtro && filtro.length > 0
          ? filtro.map((datas) => (
              <Todo
                title={datas.title}
                key={datas.id}
                status={datas.completed}
                id={datas.id}
                cambiarEstado={changeEstatus}
              />
            ))
          : "cargando"}
      </div>
    </div>
  );
};

export default App;
