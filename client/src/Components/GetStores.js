import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_STORES } from "../GraphQL/Queries";
import { useRecoilValue, useRecoilState } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";
import Store from "./subcomponents/Store";

function GetStores() {
  const [storesFilter, setStoresFilter] = useRecoilState(storesFilterAtom);
  const { data, refetch, loading } = useQuery(LOAD_STORES, {
    variables: {
      location: storesFilter.location,
      item: storesFilter.item,
      price: storesFilter.price
    }
  });

  function seeAllStores() {
    setStoresFilter({
      location: null,
      item: null,
      price: null
    });
  }

  useEffect(() => {
    refetch();
  }, [refetch, storesFilter]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>
        {storesFilter.location === null ? "All Stores" : "Filtered Stores"}
      </h1>

      {storesFilter.location !== null && (
        <button onClick={seeAllStores}>See All Stores</button>
      )}

      {data && (
        <div>
          <ul>
            {data.getAllStores.map((store, index) => {
              return <Store key={store.store_id} store={store} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export { GetStores };
