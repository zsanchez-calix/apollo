import { gql } from "@apollo/client";

export const LOAD_STORES = gql`
  query getAllStores(
    $all: Boolean!
    $location: String!
    $item: String!
    $price: Float!
  ) {
    getAllStores(all: $all, location: $location, item: $item, price: $price) {
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
