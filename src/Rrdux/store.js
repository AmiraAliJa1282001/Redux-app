import {createStore} from 'redux'
import counterReducers from './Reducers/counterReducers';

const enhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 

const store= createStore(counterReducers,enhancer());

export default store;