import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';

const App = (
  // Provider是去连接store，Provider组件内部的所有组件都有能力获取store里的内容
  <Provider store={store}> 
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

