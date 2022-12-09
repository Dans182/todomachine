import React, { useState, useContext } from "react";
import { TodoContext } from "../Context";
import "../styles/components/TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" onClick={onSubmit}>
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
