import { useState } from "react";

import { AddCategory, GifGrid} from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["goku"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)
    //La siguiente linea la utilizo para verificar que las busquedas escritas no se repitan, entonces, si la nueva categoria buscada esta incluida en el arreglo, entonces no haga nada
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory
        //esta lanzando el onAddCategory capturando el nuevo valor y actualizando el estado
        onNewCategory={(value) => onAddCategory(value)}
        // setCategories={setCategories}
      />

      {/* Listado Gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
