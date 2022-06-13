import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GetStores } from "./Components/GetStores";
import { AddStoreForm } from "./Components/AddStoreForm";
import { FindStoresForm } from "./Components/FindStoresForm";
import { RecoilRoot } from "recoil";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log("Graphql Error: ", message);
      return null;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <FindStoresForm />
        <AddStoreForm />
        <GetStores />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
