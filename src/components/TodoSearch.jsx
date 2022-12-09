import React, { useContext } from "react";
import { TodoContext } from "../Context";
import "../styles/components/TodoSearch.css";

function TodoSearch() {
  // const [searchValue, setSearchValue] = useState("");
  //  Puedes o bien importar el useState arriba y despues invocar el useState como en la linea de arriba o
  //puedes prescindir de importarlo, pero lo invocas como abajo "React.useState."
  //  const [value, setValue] = React.useState("")
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
    </>
  );
}

export { TodoSearch };
