import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = ({ target }) => {
    // console.log(target.value);
    setinputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Quitamos los espacios en blanco al inicio y al final con el método trim()
    const newInputValue = inputValue.trim().toUpperCase();
    //Evita agregar un elemento si esta en blanco el input
    if (newInputValue.length <= 1) return;
    //Se inserta un elemento si se cumplio la condición anterior
    onNewCategory(newInputValue);
    //Para que nuestro input quede limpio
    setinputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        typeof="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
