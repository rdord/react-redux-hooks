import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

const CounterContainer = () => {
  const counter = useSelector(state => state.counter.counterValue);
  const dispatch = useDispatch();

  return (
    <div>
      counter: {counter}
      <br />
      <button onClick={() => dispatch(incrementCounter())}>+</button>{' '}
      <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
  );
};

export default CounterContainer;
