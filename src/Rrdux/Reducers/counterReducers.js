// function changed state according to action
import { INCREMENT,DECREMENT ,INC_BY_VALUE} from "../Actions/Types"

const counterReducers=(state={count: 0},action) => {
  switch (action.type){
    case INCREMENT : 
      return {...state,count: state.count+1}
    case DECREMENT : 
      return {...state,count: state.count-1}
    case INC_BY_VALUE :
      return {...state, count: state.count+ action.payload}
    default:
      return state}
}
 
export default counterReducers;