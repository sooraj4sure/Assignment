import React, { useState } from 'react'

function Counter() {
    let [count, setcount] = useState(0)
    function incount() {
        setcount(count+1)
        console.log(count);
        

    }
  return (
    <div>
        <h1>Count value is {count}</h1>
        <button onClick={incount} >click me</button>
    </div>
  )
}

export default Counter