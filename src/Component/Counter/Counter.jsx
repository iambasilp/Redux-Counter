import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement, Reset } from '../../Redux/CounterSlice';
import './Counter.css';

const Counter = () => {
  const dispatch = useDispatch();
  const { count, error } = useSelector((state) => state.Counter);

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={() => dispatch(Decrement())}>
        Decrement
      </button>
      <h1 className="counter-count">{count}</h1>
      {error && <div className="counter-error">{error}</div>}
      <button className="counter-button" onClick={() => dispatch(Increment())}>
        Increment
      </button>
      <button className="counter-button reset" onClick={() => dispatch(Reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
