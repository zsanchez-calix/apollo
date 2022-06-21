import React, { useState } from "react";
import { CREATE_STORE_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useSetRecoilState } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function AddStoreForm() {
  const [createStore, { error }] = useMutation(CREATE_STORE_MUTATION);
  const setStoresFilter = useSetRecoilState(storesFilterAtom);
  const [location, setLocation] = useState("");
  const [carrotsAmount, setCarrotsAmount] = useState(0);
  const [carrotsPrice, setCarrotsPrice] = useState(0);
  const [applesAmount, setApplesAmount] = useState(0);
  const [applesPrice, setApplesPrice] = useState(0);
  const [orangesAmount, setOrangesAmount] = useState(0);
  const [orangesPrice, setOrangesPrice] = useState(0);

  const handleSubmit = () => {
    createStore({
      variables: {
        location: location,
        carrotsAmount: parseInt(carrotsAmount),
        carrotsPrice: parseFloat(carrotsPrice),
        applesAmount: parseInt(applesAmount),
        applesPrice: parseFloat(applesPrice),
        orangesAmount: parseInt(orangesAmount),
        orangesPrice: parseFloat(orangesPrice)
      }
    });
    if (error) {
      console.log(error);
    }

    setStoresFilter({
      location: null,
      item: null,
      price: null
    });
  };

  return (
    <div>
      <h3>Add Store</h3>
      <input
        type="text"
        value={location}
        placeholder="location"
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      ></input>
      <input
        type="number"
        value={carrotsAmount}
        onChange={(event) => {
          setCarrotsAmount(event.target.value);
        }}
        placeholder="number of carrots"
      ></input>
      <input
        type="number"
        value={carrotsPrice}
        onChange={(event) => {
          setCarrotsPrice(event.target.value);
        }}
        placeholder="price of one carrot"
      ></input>
      <input
        type="number"
        value={applesAmount}
        onChange={(event) => {
          setApplesAmount(event.target.value);
        }}
        placeholder="number of apples"
      ></input>
      <input
        type="number"
        value={applesPrice}
        onChange={(event) => {
          setApplesPrice(event.target.value);
        }}
        placeholder="price of one apple"
      ></input>
      <input
        type="number"
        value={orangesAmount}
        onChange={(event) => {
          setOrangesAmount(event.target.value);
        }}
        placeholder="number of oranges"
      ></input>
      <input
        type="number"
        value={orangesPrice}
        onChange={(event) => {
          setOrangesPrice(event.target.value);
        }}
        placeholder="price of one orange"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { AddStoreForm };
