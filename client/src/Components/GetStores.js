import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_STORES } from "../GraphQL/Queries";

function GetStores() {
  const { error, loading, data } = useQuery(LOAD_STORES);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {data && (
        <div>
          {data.getAllStores.map((store, index) => {
            return <p key={index}>{store.location} | {store.stock_count} | {store.item_price}</p>;
          })}
        </div>
      )}
      {null}
    </>
  );
}

export default GetStores;
