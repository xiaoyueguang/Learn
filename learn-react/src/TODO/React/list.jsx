import React, { Component } from 'react';

class List extends Component {
  render () {
    return (
      <div className={this.props.done ? 'list done' : 'list'}>
        <div className="text">{this.props.text}</div>
        <div
          className="btn success"
          onClick={this.props.doneFn.bind(this.props.app, this.props.id)}
        >完成</div>
        <div
          className="btn"
          onClick={this.props.del.bind(this.props.app, this.props.id)}
        >删除</div>
      </div>
    )
  }
}

export default List
