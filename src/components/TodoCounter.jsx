import React from "react";
import "../styles/components/TodoCounter.css";

// const estilos = {
//   color: "red",
//   backgroundColor: "yellow"
// }

// Desestructuramos los props que pasamos al componente
function TodoCounter({ total, completed }) {
  // function TodoCounter(props) {
  //  const {total, completed} = props;
  return (
    <>
      <h2 className="TodoCounter">
        Has completado {completed} de {total} TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
