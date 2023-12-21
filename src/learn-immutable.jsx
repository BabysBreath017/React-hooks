import React, { useState } from 'react'
import { produce } from 'immer'

export default function LearnImmutable() {
  const [nums, setNums] = useState([1, 2, 3])

  /**
   * 以可变数据添加，虽然更新了数据，但是没有触发视图渲染
   */
  const addMutable = () => {
    nums.push('新数据')
    setNums(nums)
  }
  /**
   * 以不可变数据方式添加
   * 创建一个和以前一模一样的新对象，但注意引用地址不能一样
   * 这样react认为引用地址变了，会重新渲染数据
   */
  const addImmutable = () => {
    // setNums([...nums, '新数据'])

    /**
     * state对象巨大，解构赋值满足不了的时候，可用immer开源库
     * 原始对象先做一层Proxy代理，得到draftState传递给funtion，function（带副作用）直接更改draftState，最后produce返回新对象
     * 第一个参数是要代理的数据,原数据
     * 第二个参数是一个函数，可以直接接受参数，即草稿数据
     * 我们可以直接进行操作，并且不需要return
     * produce会返回一个新对象，直接进行修改
     */
    const newDraft = produce(nums, drat => {
      drat.push('新数据')
    })
    console.log(newDraft)
    setNums(newDraft)
  }
  return (
    <div>
      <div>
        {
          nums.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <button onClick={addMutable}>以可变数据添加</button>
      <button onClick={addImmutable}>以不可变数据添加</button>
    </div>
  )
}
