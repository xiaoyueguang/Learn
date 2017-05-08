import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 
const names = ['LiLei', 'HanMei']
// 组件的创建方式 extends Component
class Message extends Component {
  // 声明 Props 类型
  static propsTypes = {
    name: PropTypes.string
  }
  // Props 默认值
  // getDefaultProps () {
  //   return {
  //     name: 'Hello'
  //   }
  // }

  render () {
    return (
      <h5>Hello, I'm {this.props.name} in Component</h5>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        {
          names.map((name, index) => (
            <Message key={index} name={name} />
          ))
        }
      </div>
    )
  }
}

export default App