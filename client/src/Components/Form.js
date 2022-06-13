import React from "react";
import { CREATE_STORE_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [createStore, { error }] = useMutation(CREATE_STORE_MUTATION);

  const handleSubmit = () => {
    let location = document.getElementById("location").value;
    let stock_count = parseFloat(document.getElementById("stock_count").value);
    let item_price = parseFloat(document.getElementById("item_price").value);

    createStore({
      variables: {
        location: location,
        stock_count: stock_count,
        item_price: item_price,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" id="location" placeholder="location"></input>
      <input type="text" id="stock_count" placeholder="stock_count"></input>
      <input type="text" id="item_price" placeholder="item_price"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
