import React, { Component } from 'react';
import '../style.css'
import List from './list.jsx'
import FilterBtn from './filter'

class App extends Component {
  constructor () {
    super()
    this.state = {
      // 原生数组
      oriItems: [],
      // 过滤字符
      filters: '',
      // ID
      id: 0,
      fields: [
        {field: '', text: '全部'},
        {field: 'done', text: '已完成'},
        {field: 'undone', text: '未完成'}
      ]
    }
  }
  // 没有计算属性, 只能把 items 当方法来调用了
  items = () => {
    if (this.state.filters === '') {
      return this.state.oriItems
    } else {
      return this.state.oriItems.filter(({done}) => done === (this.state.filters === 'done'))
    }
  }
  // 设置过滤
  setFilters = filters => {
    this.setState({
      filters
    })
  }
  // 添加 没有双向绑定因此需要自己手动获取值. 没有修饰符, 得手动判断输入的键
  add = e => {
    if (e.keyCode === 13) {
      const oriItems = this.state.oriItems
      oriItems.push({
        id: this.state.id,
        done: false,
        text: e.target.value
      })
      e.target.value = ''
      this.setState({
        oriItems,
        id: this.state.id + 1
      })
    }
  }
  // 完成
  done = id => {
    let oriItems = [...this.state.oriItems]
    let index = this.getIndex(id)
    oriItems[index].done = !oriItems[index].done
    this.setState({
      oriItems
    })
  }
  // 删除
  del = id => {
    let oriItems = [...this.state.oriItems]
    let index = this.getIndex(id)
    oriItems.splice(index, 1)
    this.setState({
      oriItems
    })
  }
  // 获得序号
  getIndex = id_argu => {
    let index = -1
    this.state.oriItems.forEach(({id}, ind) => {
      if (id === id_argu) index = ind
    })
    return index
  }

  render () {
    return (
      <div className="wrap">
        <h1>TODO</h1>
        <input
          className="input"
          type="text"
          onKeyDown={this.add}
        />
        <div className="filter">
          {this.state.fields.map(({field, text}, index) => (
            <FilterBtn
              active={field === this.state.filters}
              field={field}
              text={text}
              key={index}
              app={this}
              set={this.setFilters}
            >
            </FilterBtn>
          ))}
        </div>
        <div className="lists">
          {this.items().map(({id, done, text}) => (
            <List
              done={done}
              text={text}
              del={this.del}
              doneFn={this.done}
              id={id}
              key={id}
              app={this}
            ></List>
          ))}
        </div>
      </div>
    )
  }
}
export default App