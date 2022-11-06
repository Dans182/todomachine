import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de Intro de React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function TodoList() {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem />
      ))}
    </>
  );
}

export { TodoList };
