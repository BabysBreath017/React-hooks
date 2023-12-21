import React, { useState, useContext } from 'react'
import LearnChildComponent from './learn-child-component'
import MyConent from './context'

export default function LearnParentComponnent() {
  const [num, setNum] = useState(1)

  //子传父，调用父组件传过去的方法
  const getChildData = (data) => {
    console.log(data, '这个参数是子组件传过来的')
  }

  //传入我们要获取的context
  // const context = useContext(MyConent)
  // console.log(context)

  return (
    <div>
      <div>我是父组件</div>
      <button onClick={() => setNum(num + 1)}>给子组件传值，+1</button>
      {/* 给子组件传值，传一个name属性，值为张三 */}
      <LearnChildComponent name='张三' num={num} childData={getChildData}></LearnChildComponent>
    </div >
  )
}
