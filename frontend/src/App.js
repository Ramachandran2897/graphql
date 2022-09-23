import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './Home';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql?',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
