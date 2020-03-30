import React from 'react';
// Allows to hit external GraphQL API
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import PokemonsContainer from "./containers/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  return (
    <div>
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainer />
        </main>

      </ApolloProvider>
    </div>
  );
}

export default App;
