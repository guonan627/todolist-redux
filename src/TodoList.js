import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getTodoList, getInputChangeAction,getAddItemAction, getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
// import axios from 'axios';

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

  componentDidMount(){
    // axios.get('/list.json').then((res)=>{
    //   const data = res.data;
    //   // console.log(data);
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // })
    // 之前把异步的ajax 放在生命周期里不太好 容易造成组件越来越大 建议把复杂的逻辑或异步拆分 
    // 这里借助thunk 就可以把它放入actioncreators里面管理了 做自动化测试也会简单很多
    
    // 使用了redux-thunk之后 action不仅仅可以是JS对象了， 也可以是一个函数
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e){
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action); //把action的内容传给store
  }

  handleStoreChange() {
    this.setState(store.getState()); //组件里的state和store里的state同步更新
  }
  
  handleBtnClick(){
    // const action = {
    //   type: ADD_TODO_ITEM,
    // }
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index){
  //  const action = {
  //    type: DELETE_TODO_ITEM,
  //    index
  //  }
  const action = getDeleteItemAction(index);
  store.dispatch(action);
  }

}

export default TodoList;
