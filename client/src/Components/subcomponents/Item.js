import React from "react";

function Item({ item }) {
  return (
    <>
      <li>
        <p>{item.item}</p>
      </li>
      <ul>
        <li>
          <p>In Stock: {item.amount} </p>
        </li>
        <li>
          <p>Price: {item.price} </p>
        </li>
      </ul>
    </>
  );
}

export default Item;
