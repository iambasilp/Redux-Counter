import React from 'react'
import { useDispatch } from 'react-redux'
const Counter = () => {

 const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <h1>0</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default Counter
