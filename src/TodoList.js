import React from "react";
import { connect } from "react-redux";
import {getInputChangeAction, getAddItemAction, getDeleteItemAction}  from './store/actionCreators';

const TodoList = (props) => {
  //代码提升 解构赋值
  // 定义一个inputValue的变量值等于props.inputValue, 依次类推......
  // const inputValue = props.inputValue, 依次类推.....
  const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = props;
  return (
    <div>
      <div>
        <input
          // value={props.inputValue}
          // {/* value里的值this.props.inputValue就是store里的inputValue, 因为用了mapStateToProps方法 */}
          value={inputValue}
          // onChange={props.handleInputChange}
          // {/* 因为用了mapDispatchToProps方法, 可以通过props.dispatch调用store.dispatch方法 */}
          onChange={ handleInputChange}
        />
        <button
          // onClick={props.handleBtnClick }
          onClick={ handleBtnClick }
        >
          submit
        </button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={ () => handleItemDelete(index) }>
                {item}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

// 通过mapStateToProps去获取store里的数据
// mapStateToProps把store里的数据映射给组件，变成组件的props
// state指的是store里的数据，
// 把store数据里的inputValue映射到TodoList组件的props里面的inputValue上
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

// 通过mapDispatchToProps对store的数据做修改
// dispatch指的是store.dispatch 派发方法action给store
// 把store的dispatch方法挂载到组件的props上
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = getAddItemAction();
      dispatch(action);
    },
    handleItemDelete(index) {
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
//connect让组件和store做连接，按照apStateToProps和mapDispatchToProps的规则做连接
// 因为TodoList在Provider组件里，所以可以连接
