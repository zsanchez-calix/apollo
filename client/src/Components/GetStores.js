import React, { useEffect } from "react";
import uniqid from "uniqid";
import { useQuery } from "@apollo/client";
import { LOAD_STORES } from "../GraphQL/Queries";
import { useRecoilState } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function GetStores() {
  const [storesFilter, setStoresFilter] = useRecoilState(storesFilterAtom);
  const { data, refetch, loading } = useQuery(LOAD_STORES, {
    variables: {
      all: storesFilter.allStores,
      location: storesFilter.location,
      item: storesFilter.item,
      price: storesFilter.price
    }
  });

  function seeAllStores() {
    setStoresFilter({
      allStores: true,
      location: "",
      item: "",
      price: 0
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
      {storesFilter.allStores ? (
        <h1>All Stores</h1>
      ) : (
        <>
          <h1>Filtered Stores</h1>{" "}
          <button onClick={seeAllStores}>See All Stores</button>
        </>
      )}

      {data && (
        <div>
          <ul>
            {data.getAllStores.map((store, index) => {
              return (
                <div key={uniqid()}>
                  <li>
                    <p>Store: {store.store_id}</p>
                  </li>
                  <ul>
                    <li>
                      <p>Location: {store.location}</p>
                    </li>
                    {store.items.map((item, index) => {
                      return (
                        <div key={uniqid()}>
                          <li>
                            <p>{item.item}</p>
                          </li>
                          <ul>
                            <li>
                              <p>In Stock: {item.amount} </p>
                            </li>
                            <li>
                              <p>Price: {item.price} </p>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export { GetStores };
