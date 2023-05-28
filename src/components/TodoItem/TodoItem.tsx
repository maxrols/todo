import React, { useEffect, useRef, useState } from 'react'
import { todoItemProps } from '../../models/models';
import './todoItem.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem:React.FC<todoItemProps> = ({item, dispatch}) => {

  const [newTitle, setNewTitle] = useState<string>('');
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditOn])

  const checkTask = ():void => {
    dispatch({type: "DONE", payload: item.id});
  }

  const deleteTask = ():void => {
    dispatch({type: 'DELETE', payload: item.id})
  }

  const editTask = ():void => {
    if (!isEditOn) {
      setIsEditOn(true);
      setNewTitle(item.title);
    } else {
      dispatch({type: "EDIT", payload: {id: item.id, title: newTitle}});
      setIsEditOn(false);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    dispatch({type: "EDIT", payload: {id: item.id, title: newTitle}});
    setIsEditOn(false);
  }
 
  return (
    <li className={`todo-item ${item.isDone && 'todo-item_done'}`}>
      <div className='todo-item__text'>
        {isEditOn 
        ? <form onSubmit={(e) => handleSubmit(e)}><input ref={inputRef} className='todo-item__input' type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/></form>
        : item.title}
      </div>
      <div className="todo-item__btns">
        <button onClick={checkTask}><CheckCircleOutlineIcon/></button>
        <button onClick={editTask}><EditIcon/></button>
        <button onClick={deleteTask}><DeleteForeverIcon/></button>
      </div>
    </li>
  )
}

export default TodoItem
