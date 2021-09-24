import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

// 没用thunk之前 action必须是一个JS对象
// 使用了redux-thunk之后 action不仅仅可以是JS对象了， 也可以是一个函数
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res)=>{
      const data = res.data;
      const action = initListAction(data);
      // store.dispatch(action); 这里没import store, 不能这么写 
      // getTodoList（）可以自动接收dispatch这个方法, 所以可以让此函数接收dispatch 直接写成
      dispatch(action); 
    })
  }
}