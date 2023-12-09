import React, { useState } from "react";
import PropTypes from 'prop-types';


export const Addcategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCategories( cats => [inputValue, ...cats] );
  }

  return (
   
      <form onSubmit={ handleSubmit } >
        <input
          placeholder="Digita una Categoría o Personaje"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>

  );
};
Addcategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
