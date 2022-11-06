import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
//import './App.css';

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList/>
      <CreateTodoButton />
    </>
  );
}

export default App;
