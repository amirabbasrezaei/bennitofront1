import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://193.39.9.225:8080/graphql",
  cache: new InMemoryCache(),
  credentials: "include"
});

export default client;
