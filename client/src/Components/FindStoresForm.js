import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function FindStoresForm() {
  const [storesFilter, setStoresFilter] = useRecoilState(storesFilterAtom);

  const handleSubmit = () => {
    let item = document.getElementById("findItem");
    let price = document.getElementById("findPrice");
    let location = document.getElementById("findLocation");

    setStoresFilter({
      allStores: false,
      location: location.value,
      item: item.value,
      price: parseFloat(price.value),
    });
  };

  return (
    <div>
      <h3>Find Stores</h3>
      <select name="findItem" id="findItem">
        <option value="carrots">Carrots</option>
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
      </select>
      <input type="text" id="findPrice" placeholder="price"></input>
      <input type="text" id="findLocation" placeholder="location"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { FindStoresForm };
