import React, { useState } from 'react'
import LearnMemo from './learn-memo'

export default function LearnMemo2() {
  const [num, setNum] = useState(1)
  const [infos, setInfos] = useState([
    {
      name: '张三'
    },
    {
      name: '李四'
    }
  ])
  const addInfo = () => {
    setInfos([...infos, { name: "王五" }])
  }
  return (
    <div>
      <div>我是memo2</div>
      <button onClick={() => { setNum(num + 1) }}>+1</button>
      {num}
      <button onClick={() => addInfo()}>添加一个王五</button>
      <LearnMemo num={num} infos={infos}></LearnMemo>
    </div>
  )
}
