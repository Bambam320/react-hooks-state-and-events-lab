import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)

  function handleClick () {
    setInCart(!inCart)
  }

  const carted = inCart ? "in-cart" : ""

  const cartText = inCart ? "Remove From Cart" : "Add to Cart" 

  return (
    <li className={carted}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
