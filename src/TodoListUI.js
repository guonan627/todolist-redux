import React, {Component} from "react";
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render(){
    return (
      <div style={{marginTop:'10px', marginRight:'10px',}}>
        <div>
         <Input 
           value={this.props.inputValue}  // 以前是value={this.state.inputValue}  现在变了 从父组件props接收值
           placeholder="todo info" 
           style={{width: 300, marginRight:'10px', marginLeft:'10px'}}
           onChange={this.props.handleInputChange} // 以前是onChange={this.state.handleInputChange} 现在变了 从父组件props接收方法
         />
         <Button 
           type="primary"
           onClick={this.props.handleBtnClick}
         >
           Submit
         </Button>
        </div>
        <List
         style={{marginTop:'10px', marginLeft:'10px', width:300}}
         bordered
         dataSource={this.props.list}
        //  renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)} 没从父组件传props之前
        // renderItem={(item, index) => (<List.Item onClick={this.props.handleItemDelete(index)}>{item}</List.Item>)} 不能这么写
        // 要想调用父组件的方法 又想像以前一样接收index， 要写成
        renderItem={(item, index) => (<List.Item onClick={(index) => this.props.handleItemDelete(index)}>{item}</List.Item>)}
        />
     </div>
    )
  }
};

export default TodoListUI;