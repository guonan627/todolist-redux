import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
//reducer可以接收state 但绝不能修改state 要深拷贝
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
  return state;
}