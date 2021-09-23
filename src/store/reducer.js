import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
//reducer可以接收state 但绝不能修改state 要深拷贝
//只有store可以改变自己的内容
// reducer必须是纯函数， 纯函数是指，给固定的输入就一定会有固定的输出，而且不会有任何副作用
// eslint-disable-next-line import/no-anonymous-default-export
export default ( state= defaultState, action ) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState =JSON.parse(JSON.stringify(state)); //深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState =JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState =JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list.splice(action.index, 1);
    return newState;
  }
  if(action.type === INIT_LIST_ACTION) {
    const newState =JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list = action.data;
    return newState;
  }

  return state;
}