import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [value, setValue] = useState("");
  //  Puedes o bien importar el useState arriba y despues invocar el useState como en la linea de arriba o
  //puedes prescindir de importarlo, pero lo invocas como abajo "React.useState."
  //  const [value, setValue] = React.useState("")

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        onChange={onSearchValueChange}
        placeholder="Add your task"
      />
    </>
  );
}

export { TodoSearch };
