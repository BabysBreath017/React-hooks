import React, { useState } from 'react'

/* 6.
  hook组件每次更新其实就是重新调用了当前函数
*/
export default () => {
  // 10.也就是说如果我们在hook内部直接声明变量的话，每次更新或页面更新，变量都会变为初始值
  // 7.
  let name = '张三'
  // 5.每次更新数据都会打印一次
  console.log("我是组件渲染")
  // 11.简单来说useState收集依赖，等下次再执行的时候，根据依赖重新获取最新壮态或更新后的状态
  // 12.是使用闭包+链表的形式实现的
  // 2.这里的参数可以是一个方法
  const [num, setNum] = useState(() => {

    // 4.useState方法只有在初始化的时候被触发一次，后续更新数据的时候不会被触发，useState有惰性 
    //下面语句只打印一次
    console.log("我被触发了")

    return 1
  })
  // 3
  const add = () => {
    setNum(num + 1)
    // 8.
    name = '李四'
    console.log("修改后紧接着打印", name)
  }
  // 9. 打印出来的都是张三，而不是李四
  console.log("我的名字是", name)
  //1 
  return (
    <div>
      <div>你好,我是useState 进阶写法</div>
      <div>{num}</div>
      <button onClick={add}>+1</button>
    </div>
  )
}
