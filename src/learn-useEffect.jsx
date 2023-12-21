import React, { useState, useEffect } from 'react'

/**
 * useEffect的作用 监听数据的变化，如useState，props等
 * 变化后会执行方法，或者会执行第一个函数
 */
export default function LearnEffect() {
  const [num, setNum] = useState(1)
  const [count, setCount] = useState(1)
  const add = () => {
    setNum(num + 1)
  }
  const countAdd = () => {
    setCount(count + 1)
  }
  /**
   * 第一个参数是函数
   * 第二个参数是依赖项，可以是一个数组，可以存放多个依赖项
   * 
   * 只有依赖项变化的时候，函数才会调用
   * 
   * 每次render执行先卸载，后创建的顺序
   * react hooks暴露了一个卸载阶段的钩子，可以观察当前useEffect卸载或者说useEffect卸载时调用
   */
  // useEffect(() => {
  //   // 每次num变化了都会执行这个useEffect
  //   console.log("我是num变了")
  //   return () => {
  //     console.log("我是监听num的卸载")
  //   }
  // }, [num])

  /**
   * 如果没有依赖项，只要render（渲染）就会触发
   */
  useEffect(() => {
    // 每次num变化了都会执行这个useEffect
    console.log("我是useEffect触发了")
    return () => {
      console.log("我是卸载了")
    }
  })
  return (
    <div>
      <div>你好,我是Effect</div>
      <div>
        num:{num}
        <button onClick={() => add()}>+1</button>
      </div>
      <div>
        count:{count}
        <button onClick={() => countAdd()}>count + 1</button>
      </div>
    </div>
  )
}
