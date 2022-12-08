import React, { useContext } from "react";
import "../styles/components/TodoCounter.css";

// const estilos = {
//   color: "red",
//   backgroundColor: "yellow"
// }

// Desestructuramos los props que pasamos al componente
function TodoCounter() {
  // function TodoCounter(props) {
  //  const {total, completed} = props;
  const { total, completed } = useContext;
  return (
    <>
      <h2 className="TodoCounter">
        Has completado {completed} de {total} TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
