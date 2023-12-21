import React, { useState } from 'react'
import { produce } from 'immer'
export default function LearnShoppingCart() {
  const [goods, setGoods] = useState([
    {
      name: '羊肉串',
      price: 12,
      num: 1
    },
    {
      name: '猪肉串',
      price: 10,
      num: 1
    },
    {
      name: '面筋',
      price: 5,
      num: 1
    },
  ])
  const [isAllSelect, setIsAllSelect] = useState(false)
  const updateNum = (index, num) => {
    /**
     * 这种写法是可变数据更新，视图不会更新渲染
     */
    // goods[index].num += num
    // setGoods(goods)
    if (goods[index].num + num === 0) {
      return
    }
    // 以不可变数据更新
    const newDraft = produce(goods, draft => {
      draft[index].num += num
    })
    setGoods(newDraft)
  }
  const allSelectChange = () => {
    // setState 在这里是异步
    setIsAllSelect(!isAllSelect)
    // 以不可变数据来更新
    const newDraft = produce(goods, draft => {
      draft.forEach(item => {
        item.select = !isAllSelect
      })
    })
    // 同步goods的状态
    setGoods(newDraft)
  }
  const singleSelect = (index) => {
    const newDraft = produce(goods, draft => {
      draft[index].select = !draft[index].select
    })
    // 如果有一条数据不勾选，那就不应该全选
    setIsAllSelect(newDraft.every(item => item.select))
    setGoods(newDraft)
  }
  return (
    <div>
      <div>
        全选：<input checked={isAllSelect} onChange={allSelectChange} type="checkbox" name="" id="" />
      </div>
      <div>
        {
          goods.map((item, index) => (
            <div key={index}>
              <input checked={item.select} onChange={() => singleSelect(index)} type="checkbox" name="" id="" />
              商品名：{item.name}---商品价格：{item.price}---
              <button onClick={() => updateNum(index, 1)}>+</button>
              {item.num}
              <button onClick={() => updateNum(index, -1)}>-</button>
              小计：{item.num * item.price}
            </div>
          ))
        }
      </div>
      总计：{
        goods
          .filter(item => item.select)
          .reduce((total, item) => (total += item.num * item.price), 0)
      }

    </div>
  )
}
