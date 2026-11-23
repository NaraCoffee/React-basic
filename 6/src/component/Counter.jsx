import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    const nextCount = count + 1
    setCount(nextCount)
    console.log(`현재의 카운트 : ${nextCount}`)
  }

  return (
    <div>
      <p>현재의 카운트 : {count}</p>
      <button onClick={increaseCount}>+1씩 증가</button>
    </div>
  )
}

export default Counter
