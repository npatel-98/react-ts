import React, { useRef, useContext } from 'react'
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoInputRef.current!.value;
        if(enteredText.trim().length===0){
            return;
        }
        todosCtx.addTodo(enteredText);
    } 
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="todoText"></label>
        <input type="text" id="todoText" ref={todoInputRef} />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo