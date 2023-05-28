import { json } from 'node:stream/consumers';
import React, {useReducer, useEffect, useState} from 'react';
import './App.scss';
import InputBox from './components/InputBox/InputBox';
import TodoList from './components/TodoList/TodoList';
import { todoItem } from './models/models';
import { todoReducer } from './reducers/todoReducer';

const init = () => {
  const storedList = localStorage.getItem('TodoList');
  if (storedList) {
    return JSON.parse(storedList);
  }
  return [];
}
const App: React.FC = () => {
  

  const [todoList, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('TodoList', JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className='app'>
      <h1 className='title'>Taskify</h1>
      <InputBox todoDispatch={dispatch}/>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
  )
}

export default App

