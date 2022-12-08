import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Context";


//Creamos nuestro propio React Hook, la única regla es que todo Custom Hook debe empezar
//con la palabra "use"

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
