import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function FindStoresForm() {
  const [storesFilter, setStoresFilter] = useRecoilState(storesFilterAtom);

  const handleSubmit = () => {
    let store_id = parseFloat(document.getElementById("store_idAdd").value);
    let location = document.getElementById("locationAdd").value;
    let stock_count = parseFloat(
      document.getElementById("stock_countAdd").value
    );
    let item_price = parseFloat(document.getElementById("item_priceAdd").value);

    setStoresFilter({
      allStores: false,
      store_id: store_id,
      location: location,
      stock_count: stock_count,
      item_price: item_price,
    });

    document.getElementById("store_idAdd").value = "";
    document.getElementById("item_priceAdd").value = "";
    document.getElementById("locationAdd").value = "";
    document.getElementById("stock_countAdd").value = "";
  };

  return (
    <div>
      <h3>Find Stores</h3>
      <input type="text" id="store_idAdd" placeholder="id"></input>
      <input type="text" id="locationAdd" placeholder="location"></input>
      <input type="text" id="stock_countAdd" placeholder="stock_count"></input>
      <input type="text" id="item_priceAdd" placeholder="item_price"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { FindStoresForm };
