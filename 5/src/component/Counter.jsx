import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    setCount(count - 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={resetCount}>reset</button>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}

export default Counter
