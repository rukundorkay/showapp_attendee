import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/navigattion';
import {StoreProvider} from './src/context';

const App = () => (
  <StoreProvider>
    <Routes />
  </StoreProvider>
);

export default App;
