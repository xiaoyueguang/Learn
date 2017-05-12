import React, { Component } from 'react';
// 组件属性验证. React v15.5之后的版本独立出来
import PropTypes from 'prop-types';


class Msg extends Component {
  // 验证
  static propTypes = {
    name: PropTypes.string,
    // name: PropTypes.oneOf(['New', 'Photos'])
    // name: PropTypes.arrayOf(PropTypes.number).isRequired
    // name: PropTypes.any.isRequired
    // name: function (props, propName, componentName) {
    //   if (props.name && props.name.length > 2) {
    //     return new Error('名字过长')
    //   }
    // }
  }
  // 设置默认值
  static defaultProps = {
    name: 'HanMei'
  }

  render () {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
}


class App extends Component {
  render () {
    return (
      <div>
        {/*这里会有一个报错. 因为检测的值必须是 字符串*/}
        {/*<Msg name={[1, 2, 3]} />*/}
        <Msg />
        {/*<Msg name="New" />*/}
        <Msg name="LiLei" />
      </div>
    )
  }
}

export default App


// 检测类型
// 必须为某种类型
// PropTypes.array
// PropTypes.bool
// PropTypes.func
// PropTypes.number
// PropTypes.object
// PropTypes.string
// PropTypes.symbol
// PropTypes.node
// 可用来验证子节点
// PropTypes.element
// 判断原型是否为 Message 组件.
// PropTypes.instanceOf(Message)
// 传入的值 只能是枚举里的值
// PropTypes.oneOf(['New', 'Photos'])
// 传入的值 可以为多种类型
// PropTypes.oneOfType([
//   PropTypes.array
// ])
// 传入的数组中必须都为某种类型的值
// PropTypes.arrayOf(PropTypes.number)
// 传入的对象的值 必须都为某种类型的值
// PropTypes.objectOf(PropTypes.number)
// 在任意一个值后面加上 isRequired. 表明该值为必须
// PropTypes.func.isRequired
// 表示该值 必须
// PropTypes.any.isRequired
// 自定义验证方法
// function(props, propName, componentName) {}
// 数组自定义方法
// PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {})