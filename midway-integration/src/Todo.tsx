import React, { useState, useEffect, useCallback } from 'react';
import { ITodo, toggleTodo, deleteTodo } from './apis/lambda';

interface TodoProps {
  todo: ITodo;
  onRefresh: () => void;
}

const Todo: React.FC<TodoProps> = (props) => {
  const todo = props.todo;
  const del = useCallback(() => {
    deleteTodo(todo.id);
    props.onRefresh();
  }, [todo]);
  const toggle = useCallback(() => {
    toggleTodo(todo.id, !todo.done);
    props.onRefresh();
  }, [todo]);
  return (
    <div style={{ display: 'flex' }}>
      <input
        title={todo.text}
        type='checkbox'
        checked={todo.done}
        onChange={toggle}
      />
      <div>
        {todo.text}
      </div>
      <button onClick={del}>删除</button>
    </div>
  )
}

export default Todo;
