import { combineReducers, createStore } from "redux";
import reducers1 from './components/stepper/reducer/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(combineReducers({ reducers1 }, composeWithDevTools()));