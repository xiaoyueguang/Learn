import React, { useState, useEffect, useCallback } from 'react';
import { fetchTodos, create, ITodo } from './apis/lambda';
import TodoComponent from './Todo'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState<string>('');


  useEffect(() => {
    fetch();
  }, []);

  const fetch = useCallback(async () => {
    const todos = await fetchTodos();
    setTodos(todos);
  }, []);

  const add = useCallback(() => {
    create(text);
    setText('');
    fetch();
  }, [text]);

  return (
    <div className="App">
      <div>
        {
          todos.map(todo => (
            <TodoComponent
              todo={todo}
              onRefresh={fetch}
              key={todo.id}
            />
          ))
        }
      </div>

      <input
        type='text'
        value={text}
        title='input'
        onChange={target => {
          setText(target.currentTarget.value);
        }}
      />
      <button onClick={add}>添加</button>
    </div>
  );
}

export default App;
