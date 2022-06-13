import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_STORES } from "../GraphQL/Queries";
import { useRecoilState, useRecoilValue } from "recoil";
import { stores as storesAtom } from "../atoms";

function GetStores() {
  const { data, startPolling, stopPolling } = useQuery(LOAD_STORES);
  const [stores, setStores] = useRecoilState(storesAtom);

  useEffect(() => {
    console.log(data);
    startPolling(500);
    if (data) setStores(data.getAllStores);
    return () => stopPolling();
  }, [startPolling, stopPolling, data, setStores]);

  return (
    <>
      <h1>All Stores</h1>
      {stores && (
        <div>
          {stores.map((store, index) => {
            return (
              <p key={index}>
                {store.location} | {store.stock_count} | {store.item_price}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

export { GetStores };

//add state for filtering to find stores
//update filter
//let map incorporate filter atom for display
