import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Estado inicial de nuestros TODOs
  const [item, setItem] = React.useState(initialValue);

  //Sin las [] se ejecuta el useEffect cada vez que se renderice la página
  //Con las [] se ejecuta solo la primera vez que se renderiza la página
  //Con un valor dentro de las [], se renderiza cuando hay cambios en ese valor dentro de llaves
  useEffect(() => {
    // Simulamos un segundo de delay de carga
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
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
        setLoading(false);
      } catch (error) {
        // En caso de un error lo guardamos en el estado

        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error

    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      //En localStorage lo enviamos en String
    } catch (error) {
      // En caso de algún error lo guardamos en el estado

      setError(error);
    }
  };
  //por convención, si mi custom hook devuelve dos valores, sería un array
  //si devuelve mas de 2, pues debería ser un objeto.
  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto

  return { item, saveItem, loading, error };
}

export { useLocalStorage }