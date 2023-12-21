// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom';
// 引入App组件
import App from './App';
import LearnEffect from './learn-useEffect';
import LearnImmutable from './learn-immutable';
import LearnShoppingCart from './learn-shoppingCart';
import LearnParentComponent from './learn-parent-component';
import MyContex from './context'
import LearnMemo2 from './learn-memo2'



// 渲染App到页面
ReactDOM.render(
  <MyContex.Provider value={{ name: "张三", age: 10 }}>
    {/* <App />,
    <LearnImmutable></LearnImmutable>,
    <LearnShoppingCart></LearnShoppingCart>,
    <LearnParentComponent></LearnParentComponent>, */}
    {/* <LearnParentComponent></LearnParentComponent>, */}
    <LearnMemo2></LearnMemo2>,
  </MyContex.Provider>,

  document.getElementById('root'));
