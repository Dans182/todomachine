import React, { useContext } from "react";
import { TodoContext } from "../Context";
import "../styles/components/TodoCounter.css";

// const estilos = {
//   color: "red",
//   backgroundColor: "yellow"
// }

// Desestructuramos los props que pasamos al componente
function TodoCounter() {
  // function TodoCounter(props) {
  //  const {total, completed} = props;
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <>
      <h2 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
