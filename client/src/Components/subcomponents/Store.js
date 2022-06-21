import React from "react";
import Item from "./Item";

function Store({ store }) {
  return (
    <div>
      <li>
        <p>Store: {store.store_id}</p>
      </li>
      <ul>
        <li>
          <p>Location: {store.location}</p>
        </li>
        {store.items.map((item, index) => {
          return <Item key={store.store_id + item.item} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default Store;
