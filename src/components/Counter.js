import React , {useState}from 'react'

 function Counter() {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
export default Counter;