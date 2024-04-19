import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList'

function App() {
  return (
    <Provider store={store}>
    <div><h1>Search for A Package</h1>
    <RepositoriesList />
    </div>
    

    </Provider>
  );
}

export default App;
