import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter = () => {
  const [number, setNumber] = useState(1);
  const counter = useSelector(state => state.counter.counterValue);
  const dispatch = useDispatch();

  return (
    <div>
      counter: {counter}
      <br />
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
      <br />
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(incrementCounter(number))}>Increment by {number}</button>
    </div>
  );
};

export default Counter;
