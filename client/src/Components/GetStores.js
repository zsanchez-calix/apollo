import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_STORES } from "../GraphQL/Queries";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  stores as storesAtom,
  storesFilter as storesFilterAtom,
} from "../atoms";

function GetStores() {
  const { data, startPolling, stopPolling } = useQuery(LOAD_STORES);
  const [stores, setStores] = useRecoilState(storesAtom);
  const storesFilter = useRecoilValue(storesFilterAtom);

  useEffect(() => {
    startPolling(500);
    if (data) setStores(data.getAllStores);
    return () => stopPolling();
  }, [startPolling, stopPolling, data, setStores]);

  return (
    <>
      {storesFilter.allStores ? <h1>All Stores</h1> : <h1>Filtered Stores</h1>}
      {stores && (
        <div>
          {stores.map((store, index) => {
            if (storesFilter.allStores === true) {
              return (
                <p key={index}>
                  {store.store_id} | {store.location} | {store.stock_count} |{" "}
                  {store.item_price}
                </p>
              );
            }

            const storeKey = Object.keys(store);

            for (let key of storeKey) {
              if (store[key] === storesFilter[key]) {
                return (
                  <p key={index}>
                    {store.store_id} | {store.location} | {store.stock_count} |{" "}
                    {store.item_price}
                  </p>
                );
              }
            }

            return null;
          })}
        </div>
      )}
    </>
  );
}

export { GetStores };
