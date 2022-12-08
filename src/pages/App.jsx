import React, { useState, useEffect } from "react";
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

//Creamos nuestro propio React Hook, la única regla es que todo Custom Hook debe empezar
//con la palabra "use"

function useLocalStorage(itemName, initialValue) {
  // Estado inicial de nuestros TODOs
  const [item, setItem] = React.useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      //Con la exclamacion y localStorage (!localStorage) verificamos si no existe, es null, undefined o false o un string vacío.
      if (!localStorageItem) {
        //Recuerda que localstorage solo puede guardar información en strings
        /*Es muy importante saber que localStorage solamente puede guardar texto, 
        no objetos, arreglos, números, solo strings para esto podemos utilizar unos métodos de JSON
        Convertir a texto: JSON.stringify()
        Convertir a JavaScript: JSON.parse()*/
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        //si ya hay creado algo en storage, parsedItem que es un String, ahora la transformamos en un objeto de js con JSON.parse.
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
    }, 1000);
  });

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    //En localStorage lo enviamos en String
  };
  return [item, saveItem];
}

function App() {
  //La idea es que nuestro componente App consuma directamente el localStorage a través
  //de nuestro customhook de localStorage
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

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
    saveTodos(newTodos);
  };

  /*Función para eliminar una tarea*/
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //Sin las [] se ejecuta el useEffect cada vez que se renderice la página
  //Con las [] se ejecuta solo la primera vez que se renderiza la página
  //Con un valor dentro de las [], se renderiza cuando hay cambios en ese valor dentro de llaves
  useEffect(() => {
    console.log("Acá llamamos al useEffect");
  }, []);

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
