import React from "react";

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
