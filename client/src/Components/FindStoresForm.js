import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function FindStoresForm() {
  const setStoresFilter = useSetRecoilState(storesFilterAtom);
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("carrots");
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    setStoresFilter({
      location: location,
      item: item,
      price: parseFloat(price)
    });
  };

  return (
    <div>
      <h3>Find Stores</h3>
      <select
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      >
        <option value="carrots">Carrots</option>
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
      </select>
      <input
        type="number"
        value={price}
        placeholder="price"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      <input
        type="text"
        value={location}
        placeholder="location"
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { FindStoresForm };
