import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState(); // state里的数据要来源于store里的数据
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange); //store里的数据一旦有变化，subscribe里的函数就可以被自动执行
  }

  render(){
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}  // 通过props向子组件TodoListUI传值
        list = {this.state.list} // 通过props向子组件TodoListUI传值
        handleInputChange = {this.handleInputChange} // 通过props向子组件TodoListUI传方法
        handleBtnClick = {this.handleBtnClick}  // 通过props向子组件TodoListUI传方法
        handleItemDelete = {this.handleItemDelete}  // 通过props向子组件TodoListUI传方法
      />
    )
  }

  handleInputChange(e){
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action); //把action的内容传给store
  }

  handleStoreChange() {
    this.setState(store.getState()); //组件里的state和store里的state同步更新
  }
  
  handleBtnClick(){
    const action = {
      type: ADD_TODO_ITEM,
    }
    store.dispatch(action);
  }

  handleItemDelete(index){
   const action = {
     type: DELETE_TODO_ITEM,
     index
   }
   store.dispatch(action);
  }

}

export default TodoList;
