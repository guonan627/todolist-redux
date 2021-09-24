import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';


// function*  getInitList() {
//   yield axios.get('/list.json').then((res)=>{
//     const data = res.data;
//     const action = initListAction(data);
//     // store.dispatch(action); saga里没有store这个仓库 不能调用dispatch方法
//     // 要用saga方法put来派发给reducer
//     put(action);    
//   })
// }
// generator函数里面做异步请求时， 就不要采用promise的形式了 要写成
// 对ajax异常抓取错误 用try catch
function*  getInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);  
  } catch(e) {
    console.log ('I cannot catch the list.json')
  }
}

// ES6 generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList); 
  // takeEvery 捕捉每一个action的类型 只要我接收到GET_INIT_LIST类型的action， 我就执行getInitList方法
  // 没用saga前 action只能在reducer里面接收
  // 用了saga 可以在saga.js里用takeEvery去捕获到每一个action
}

export default mySaga;