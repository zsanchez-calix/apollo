import { gql } from "@apollo/client";

export const LOAD_STORES = gql`
  query getAllStores($location: String! $item: String! $price: Float!) {
    getAllStores(location: $location item: $item price: $price) {
      store_id
      location
      items {
        item
        price
        amount
      }
    }
  }
`;


//might implement just get all stores