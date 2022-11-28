import React, { useState } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
//import './App.css';

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso de Intro de React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  //Con la exclamacion y localStorage (!localStorage) verificamos si no existe, es null, undefined o false o un string vacío.
  if (!localStorageTodos) {
    //Recuerda que localstorage solo puede guardar información en strings
    /*Es muy importante saber que localStorage solamente puede guardar texto, 
    no objetos, arreglos, números, solo strings para esto podemos utilizar unos métodos de JSON
    Convertir a texto: JSON.stringify()
    Convertir a JavaScript: JSON.parse()*/
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    //si ya hay creado algo en storage, parsedTodos que es un String, ahora la transformamos en un objeto de js con JSON.parse.
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // Estado inicial de nuestros TODOs
  const [todos, setTodos] = React.useState(parsedTodos);

  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = useState("");

  //const completedTodos = todos.filter((todo) => todo.completed == true).length;
  // Cantidad de TODOs completados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  /*Función para completar una tarea*/
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  /*Función para eliminar una tarea*/
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      {/* Pasamos el estado a nuestro componente */}
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {/* Acá me despliega tantos TodosItems como haya registrados */}
        {/* Regresamos solamente los TODOs buscados */}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
