import React, {  useState } from 'react'
import './todoform.css';

export default function TodoForm({addTodo}) {
   
  
    
    const [todoString,setTodoString]= useState('');
   
    

    const handleSubmit=(e)=>{
      e.preventDefault();
        
        
        
          addTodo(todoString);
        
        setTodoString('');

       
    }
    const handleonChange=(event)=>{
         
      setTodoString(event.target.value);
       
        

    }
    

  return (
    <>
    

        <form className="TodoForm" >
          <h1>Do it now!</h1>

           <input type="text" placeholder='Enter Todo' onChange={handleonChange} value={todoString} className="todo-input"/>
           <button  onClick={handleSubmit} className='todo-btn'>Add Task</button>

        </form>

    </>
  )
}
