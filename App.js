import React from 'react';
import {View, Text} from 'react-native';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import AddChamp from './components/AddChamp';
import Champs from './components/Champs';
import Screen from './navigation/StackNavigation';
const client = new ApolloClient({
  uri: 'https://graphqlchampion.herokuapp.com/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Screen />
    </ApolloProvider>
  );
};

export default App;
