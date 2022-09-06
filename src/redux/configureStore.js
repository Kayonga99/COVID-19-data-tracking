import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import { covidReducer } from './covidData/covid';

const reducer = combineReducers({ covidReducer });

const store = createStore(
  reducer,
  (applyMiddleware(thunk, logger)),
);

export default store;
