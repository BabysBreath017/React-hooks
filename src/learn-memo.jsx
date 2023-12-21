import React from 'react'

/**
 * 高阶组件的定义
 * 参数组件，返回值为新组件的函数
 * 
 * React.memo默认会对props做一层浅比较
 * 如果props不变，那么就不会重新渲染
 */
export default React.memo(function LearnMemo(props) {
  console.log("我是重新渲染", props)
  return (
    <div>
      <div>我是memo</div>
      <div>num是偶数才会触发更新</div>
      <div>
        {props.infos.map((itme, index) => (
          <div key={index}>{itme.name}</div>
        ))}
      </div>
      <div>这是父组件传过来的num:{props.num}</div>
    </div>
  )
  // preProps上一次的值，nextProps最新的值
  // 可以做渲染劫持，自定义逻辑做劫持
}, (preProps, nextProps) => {
  console.log('老值', preProps, '新值', nextProps)

  //偶数是渲染，但注意：react.memo 返回true是不渲染，返回false是渲染
  return !(nextProps.num % 2 === 0)
})