import React, { useContext } from 'react'
import MyConent from './context'

/**
 * 使用useState的第二个参数，修改值，页面会重新渲染
 * 如果组件的props发生变化，页面也会重新渲染
 * 不管props里面的值有没有被使用，只要props发生变化，组件都会重新渲染
 */
// 父传子，子组件接收父组件传递的值用props
export default function LearnChildComponent(props) {
  // console.log(props)
  //这个方法是父组件传过来的，子组件就可以调用
  const toParent = () => {
    props.childData('子组件传过去的ha~ha~ha')
  }
  const context = useContext(MyConent)
  console.log(context, '这里也能拿到')

  return (
    <div>
      <div>我是子组件</div>
      <div>{props.name}</div>
      <button onClick={() => toParent()}>给父组件传值</button>
      <div>context{context.name}---{context.age}</div>
    </div>
  )
}
