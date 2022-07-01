import React , {useState}from 'react'
import { INCREMENT,DECREMENT } from "../Rrdux/Actions/Types"
import { useDispatch, useSelector } from 'react-redux';
import {decrementAction,incrementAction ,incByValueAction} from '../Rrdux/Actions/CounterActions'

 function Counter() {
    const [count,setCount]=useState(0);

    const countState = useSelector(state=>state.count)
    const dispatch = useDispatch();

    console.log(countState)

    const handleIncrement=()=>{
        //setCount(count+1);
        // dispatch({
        //   type: INCREMENT
        // })
        dispatch(incrementAction())
    }
    const handleDecrement=()=>{
        //setCount(count-1);
        // dispatch({
        //   type: DECREMENT
        // });
        dispatch(decrementAction())
    }
    const handleInByValue=(val)=>{
      
      dispatch(incByValueAction(val))
  }
  return (
    <div>
        <p>{countState}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={()=>handleInByValue(3)}>Increment by 3</button>
    </div>
  )
}
export default Counter;