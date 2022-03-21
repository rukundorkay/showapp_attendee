import React from 'react';
import Routes from './src/navigattion';
import { StoreProvider } from './src/context';

const App = () => (
  <StoreProvider>
    <Routes />
  </StoreProvider>
)

export default App