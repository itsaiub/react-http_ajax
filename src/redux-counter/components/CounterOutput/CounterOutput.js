import React from 'react'
import './CounterOutput.css'
const CounterOutput = (props) => {
  return (
    <div className='CounterOutput'>
      Current Output: {props.value}
    </div>
  )
}

export default CounterOutput
