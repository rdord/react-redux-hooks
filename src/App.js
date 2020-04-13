import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
