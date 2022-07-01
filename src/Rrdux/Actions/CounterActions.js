import { INCREMENT,DECREMENT , INC_BY_VALUE} from "./Types"

export const incrementAction =() =>{
    return {
        type: INCREMENT
    }
}

export const decrementAction =() =>{
    return {
        type: DECREMENT
    }
}

export const incByValueAction =(val) =>{
    return {
        type: INC_BY_VALUE,
        payload: val
    }
}