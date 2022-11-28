import React from "react";
import "../styles/components/TodoItem.css";

function TodoItem(props) {
  // const onComplete = () => {
  //   alert("Ya completaste la tarea " + props.text);
  // };
  // onClick={() => {
  //   alert("Eliminaste la tarea " + props.text);
  // }}

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
