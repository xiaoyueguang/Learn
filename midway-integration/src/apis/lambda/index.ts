import { useContext } from '@midwayjs/hooks';
import { Context } from '@midwayjs/koa';

function useKoaContext() {
  return useContext<Context>();
}

export default async () => {
  return {
    message: 'Hello World',
    method: useKoaContext().method,
  };
};

export const post = async (name: string) => {
  return { method: 'POST', name };
};

let id = 0;
export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}
const Todos: ITodo[] = [];

export const fetchTodos = async(): Promise<ITodo[]> => {
  return Todos;
}

export const create = async(text: string): Promise<ITodo> => {
  const todo = {
    id: id++,
    text,
    done: false,
  };
  Todos.push(todo);
  return todo;
}

export const toggleTodo = async(id: number, done: boolean): Promise<ITodo> => {
  const todo = Todos.find(todo => todo.id === id);
  todo.done = done;

  return todo;
}

export const deleteTodo = async(id: number): Promise<void> => {
  const index = Todos.findIndex(todo => todo.id === id);
  Todos.splice(index, 1);
}