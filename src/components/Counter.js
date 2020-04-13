import React from 'react';
import CounterContainer from '../containers/CounterContainer';

const Counter = ({ children }) => {
  return <CounterContainer>{children}</CounterContainer>;
};

export default Counter;
