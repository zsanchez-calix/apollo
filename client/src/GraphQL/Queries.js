import { gql } from "@apollo/client";

export const LOAD_STORES = gql`
  query {
    getAllStores {
      store_id
      location
      stock_count
      item_price
    }
  }
`;
