import React from "react";
import { CREATE_STORE_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useRecoilState, useRecoilValue } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function AddStoreForm() {
  const [createStore, { error }] = useMutation(CREATE_STORE_MUTATION);
  const [storesFilter, setStoresFilter] = useRecoilState(storesFilterAtom);

  const handleSubmit = () => {
    let location = document.getElementById("locationAdd");
    let carrotsAmount = document.getElementById("carrotsAmount");
    let carrotsPrice = document.getElementById("carrotsPrice");
    let applesAmount = document.getElementById("applesAmount");
    let applesPrice = document.getElementById("applesPrice");
    let orangesAmount = document.getElementById("orangesAmount");
    let orangesPrice = document.getElementById("orangesPrice");

    createStore({
      variables: {
        location: location.value,
        carrotsAmount: parseInt(carrotsAmount.value),
        carrotsPrice: parseFloat(carrotsPrice.value),
        applesAmount: parseInt(applesAmount.value),
        applesPrice: parseFloat(applesPrice.value),
        orangesAmount: parseInt(orangesAmount.value),
        orangesPrice: parseFloat(orangesPrice.value)
      }
    });
    if (error) {
      console.log(error);
    }

    setStoresFilter({
      allStores: true,
      location: "",
      item: "",
      price: 0
    });

    location.value =
      carrotsAmount.value =
      carrotsPrice.value =
      applesAmount.value =
      applesPrice.value =
      orangesAmount.value =
      orangesPrice.value =
        "";
  };

  return (
    <div>
      <h3>Add Store</h3>
      <input type="text" id="locationAdd" placeholder="location"></input>
      <input
        type="text"
        id="carrotsAmount"
        placeholder="number of carrots"
      ></input>
      <input
        type="text"
        id="carrotsPrice"
        placeholder="price of one carrot"
      ></input>
      <input
        type="text"
        id="applesAmount"
        placeholder="number of apples"
      ></input>
      <input
        type="text"
        id="applesPrice"
        placeholder="price of one apple"
      ></input>
      <input
        type="text"
        id="orangesAmount"
        placeholder="number of oranges"
      ></input>
      <input
        type="text"
        id="orangesPrice"
        placeholder="price of one orange"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { AddStoreForm };
