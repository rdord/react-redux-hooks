import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <br />
      <Users />
    </Provider>
  );
}

export default App;
