import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Friends"]);

  return (
    <>
      <h1>GIF EXPERT APP</h1>
      <hr />
      <AddCategory setCategories={setCategories} />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid 
            category={category}
            key={category}
          />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
