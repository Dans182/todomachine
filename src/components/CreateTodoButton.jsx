import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {

  // const onClickButton = () =>{
  //   alert("Prueba")
  // }

  return (
    <>
      <button
        className="CreateTodoButton"
        //hay que envolverlo nuestro codigo del onClick en una función o arrow function.
        //Es igualmente valido crear una función fuera, definirla y despues en el onClick
        //simplemente invocarla.
        //Pero lo que no podemos hacer es mandar una orden, directamente, sin función en el
        //onClick, ya que esto lo que haría es ejecutar el codigo en el primer renderizado
        //Aca no está haciendo su "funcionalidad", no hace su función.
        onClick={() => {
          console.log("Click!");
        }}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
