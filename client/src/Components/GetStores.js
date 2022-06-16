import React, { useEffect } from "react";
import uniqid from "uniqid";
import { useQuery } from "@apollo/client";
import { LOAD_STORES } from "../GraphQL/Queries";
import { useRecoilValue } from "recoil";
import { storesFilter as storesFilterAtom } from "../atoms";

function GetStores() {
  const storesFilter = useRecoilValue(storesFilterAtom);
  const { data, refetch, loading } = useQuery(LOAD_STORES, {
    variables: {
      location: storesFilter.location,
      item: storesFilter.item,
      price: storesFilter.price
    }
  });

  useEffect(() => {
    refetch();
  }, [storesFilter, refetch, data, loading]); //check if all these depndencies need to be here

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {storesFilter.allStores ? (
          <h1>All Stores</h1>
        ) : (
          <h1>Filtered Stores</h1>
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
}

export { GetStores };
