import React from 'react';

export default props => (
  <div
    className={props.active ? 'active' : ''}
    onClick={props.set.bind(props.app, props.field)}
  >{props.text}</div>
)