import React from 'react'

const Exam1 = ({ name, age }) => {
  return (
    <p>
      나의 이름은 <span style={{ color: 'red' }}>{name}</span>이고 나이는{' '}
      <span style={{ color: 'blue' }}>{age}</span> 야
    </p>
  )
}

export default Exam1
