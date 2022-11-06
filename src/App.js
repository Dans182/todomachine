import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
//import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de Intro de React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <input placeholder="Cebolla" />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
