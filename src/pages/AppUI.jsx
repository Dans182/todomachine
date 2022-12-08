import React from "react";
import { TodoContext } from "../Context";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

// Desescructuramos las nuevas props
function AppUI() {
  return (
    <React.Fragment>
      {/* Pasamos el estado a nuestro componente */}
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({error, loading, searchedTodos, completeTodo, deleteTodo}) => (
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando
        lo sdatos */}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para
        crear el primer TODO */}
            {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
