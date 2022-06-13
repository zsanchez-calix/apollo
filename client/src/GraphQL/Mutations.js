import { gql } from "@apollo/client";

export const CREATE_STORE_MUTATION = gql`
  mutation createStore(
    $location: String!
    $stock_count: Float!
    $item_price: Float!
  ) {
    createStore(
      location: $location
      stock_count: $stock_count
      item_price: $item_price
    ) {
      store_id
      location
    }
  }
`;
