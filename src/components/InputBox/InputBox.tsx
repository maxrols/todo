import React, {useState} from 'react';
import './inputBox.scss';
import { inputBoxProps } from '../../models/models';

const InputBox:React.FC<inputBoxProps> = ({todoDispatch}) => {

  const [title, setTitle] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    todoDispatch({type: "ADD", payload: title});
    setTitle('');
  }

  return (
    <form className='input-box' onSubmit={(e) => handleSubmit(e)}>
        <input type="text"  className='input-box__input' onChange={(e) => handleChange(e)} value={title}/>
        <button className='input-box__btn'>Go</button>
    </form>
  )
}

export default InputBox;
