import React, { useContext } from "react";
import { TodoContext } from "../Context";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodosError } from "../TodosError/index";
import { TodosLoading } from "../TodosLoading/index";
import { EmptyTodos } from "../EmptyTodos/index";

// Desescructuramos las nuevas props
function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      {/* Pasamos el estado a nuestro componente */}
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando
        lo sdatos */}
        {loading && <TodosLoading />}
        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para
        crear el primer TODO */}
        {!loading && !searchedTodos.length && <EmptyTodos />}
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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
