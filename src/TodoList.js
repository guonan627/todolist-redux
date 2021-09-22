import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState(); // state里的数据要来源于store里的数据
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange); //store里的数据一旦有变化，subscribe里的函数就可以被自动执行

  }

  render(){
    return (
      <div>
       <div style={{marginTop:'10px', marginLeft:'10px'}}>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{width: 300, marginRight:'10px'}}
            onChange={this.handleInputChange}
          />
          <Button 
            type="primary"
            onClick={this.handleBtnClick}
          >
            Submit
          </Button>
       </div>
       <List
          style={{marginTop:'10px', marginLeft:'10px', width:300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
        />
      </div>
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
