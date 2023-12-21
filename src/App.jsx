// 1.引入react
// 10 引入useState
import React, { useState } from 'react';

// 2 创建一个箭头函数
const LearnUseState = () => {
  //11 只要数据要联动视图，统一把数据放在useState，useState是react自带的hook，这个方法它会返回一个数组
  // num就是我们的state，setNum是我们改变state的方法
  const [num, setNum] = useState(1)
  //7.声明add方法
  const add = () => {
    // alert("你好，我点击了")
    //12 调用set方法改变数值
    setNum(num + 1)
    //13 不能直接改变变量
    //num +=1
  }

  /*
    如果return的是jsx，那么它就是一个组件
    如果return的是一些方法或属性，那么它就是一个自定义hook
  */
  //4
  return (
    <div>
      {/* 5 创建一个div */}
      <div>我是hook组件</div>
      {/* 6 创建一个button，并绑定点击事件 */}
      {/* 8 在hook里面定义方法是不需要考虑this */}
      <button onClick={add} >+1</button>
      {/* 9 想要实现点击会自动加1的功能，首先要声明一个变量 */}
      <div>{num}</div>
    </div>
  );
};
//3.导出
export default LearnUseState