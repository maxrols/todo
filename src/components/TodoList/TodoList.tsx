import React from 'react'
import { todoListProps } from '../../models/models'
import TodoItem from '../TodoItem/TodoItem';
import './todoList.scss';

const TodoList:React.FC<todoListProps> = ({todoList, dispatch}) => {
  return (
    <ul className='todo-list'>
      {todoList.map(item => {
        return <TodoItem key={item.id} dispatch={dispatch} item={item}/>
      })}
    </ul>
  )
}

export default TodoList
