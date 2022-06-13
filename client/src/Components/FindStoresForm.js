import React from "react";

function FindStoresForm() {
  const handleSubmit = () => {
    let location = document.getElementById("locationAdd").value;
    let stock_count = parseFloat(
      document.getElementById("stock_countAdd").value
    );
    let item_price = parseFloat(document.getElementById("item_priceAdd").value);
  };

  return (
    <div>
      <h3>Find Stores</h3>
      <input type="text" id="locationAdd" placeholder="location"></input>
      <input type="text" id="stock_countAdd" placeholder="stock_count"></input>
      <input type="text" id="item_priceAdd" placeholder="item_price"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { FindStoresForm };
