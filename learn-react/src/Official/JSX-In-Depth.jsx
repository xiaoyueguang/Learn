import React, { Component } from 'react';

// JSX 可以作为一个对象的属性值
const components = {
  hello (props) {
    return <span>Hello {props.msg} </span>
  },
  world: <span>World!</span>,
  bool (props) {
    if (props.auto) {
      return <p>auto</p>
    } else {
      return <p>not auto</p>
    }
  },
  obj (props) {
    return (
      <p>
        <span>{props.firstName} </span>
        <span>{props.lastName}</span>
      </p>
    )
  },
  parent (props) {
    // 引用子组件
    return (
      <ul>
        {props.children}
      </ul>
    )
  },
  children (props) {
    return (
      <li>{props.name}</li>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <components.hello />
        {components.world}
        <br/>
        {/*会被转码*/}
        <components.hello msg="&lt;3"/>
        <br/>
        <components.hello msg={'&lt;3'}/>
        {/*在组件上直接写属性值, 表示默认 true*/}
        <components.bool auto="true" />
        <components.bool auto />
        {/*组件上也可以直接用扩展符 扩展对象*/}
        <components.obj firstName="Ben" lastName="Hector" />
        <components.obj {...{firstName: 'Ben', lastName: 'Hector'}} />
        {/*引用子组件. 类似 SLOT */}
        <components.parent>
          <components.children name="LiLei"/>
          <components.children name="HanMei"/>
        </components.parent>
      </div>
    )
  }
}

export default App