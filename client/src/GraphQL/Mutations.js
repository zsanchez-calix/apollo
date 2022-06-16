import { gql } from "@apollo/client";

export const CREATE_STORE_MUTATION = gql`
  mutation createStore(
    $location: String!
    $carrotsAmount: Int!
    $carrotsPrice: Float!
    $applesAmount: Int!
    $applesPrice: Float!
    $orangesAmount: Int!
    $orangesPrice: Float!
  ) {
    createStore(
      location: $location
      carrotsAmount: $carrotsAmount
      carrotsPrice: $carrotsPrice
      applesAmount: $applesAmount
      applesPrice: $applesPrice
      orangesAmount: $orangesAmount
      orangesPrice: $orangesPrice
    ) {
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
