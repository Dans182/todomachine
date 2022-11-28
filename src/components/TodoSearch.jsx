import React, { useState } from "react";
import "../styles/components/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  // const [searchValue, setSearchValue] = useState("");
  //  Puedes o bien importar el useState arriba y despues invocar el useState como en la linea de arriba o
  //puedes prescindir de importarlo, pero lo invocas como abajo "React.useState."
  //  const [value, setValue] = React.useState("")

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        onChange={onSearchValueChange}
        placeholder="Add your task"
        value={searchValue}
      />
      {searchValue}
    </>
  );
}

export { TodoSearch };
