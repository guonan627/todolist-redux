const defaultState = {
  inputValue: '111',
  list: [1,2]
}
//reducer可以接收state 但绝不能修改state 要深拷贝
// eslint-disable-next-line import/no-anonymous-default-export
export default ( state= defaultState, action ) => {
  if(action.type === 'change_input_value') {
    const newState =JSON.parse(JSON.stringify(state)); //深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'add_todo_item') {
    const newState =JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}