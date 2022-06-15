import React from "react";
import { CREATE_STORE_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useRecoilState, useRecoilValue } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function AddStoreForm() {
  const [createStore, { error }] = useMutation(CREATE_STORE_MUTATION);
  const [storesFilter, setStoresFilter] = useRecoilState(storesFilterAtom);

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

    setStoresFilter({
      allStores: true,
      store_id: null,
      location: null,
      stock_count: null,
      item_price: null,
    });

    document.getElementById("item_price").value = "";
    document.getElementById("location").value = "";
    document.getElementById("stock_count").value = "";
  };

  return (
    <div>
      <h3>Add Store</h3>
      <input type="text" id="location" placeholder="location"></input>
      <input type="text" id="stock_count" placeholder="stock_count"></input>
      <input type="text" id="item_price" placeholder="item_price"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { AddStoreForm };
