import {createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// const store = createStore(
//   reducer, 
//   applyMiddleware(thunk) 
//   // applyMiddleware([thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()])
// Thunk 和 Redux Devtools 都是 Redux 的中间件
// );

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(reducer, enhancer);


export default store;