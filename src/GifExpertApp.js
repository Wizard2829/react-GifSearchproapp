import React, { useState } from "react";
import { Addcategory } from "./components/Addcategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories=[ 'One Punch', 'Samuray X', 'Dragon Ball']
  const [categories, setCategories] = useState([" "]); 

 /*  const handleAddCategory = () => {
    setCategories( [...categories, "Garfield"] );

    
  };
      console.log(categories); */
  return (
    <>
      <h2>Gifs Search Pro</h2>
           <Addcategory  setCategories={setCategories} />
      <hr />
      {/* <button onClick={ handleAddCategory }>Agregar</button> */}
      
      
      <ol>
        {categories.map(category => (
          <GifGrid 
          key={category} 
          category={category}/>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
