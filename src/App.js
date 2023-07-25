
import './App.css';
import TodoForm from './components/TodoForm';
import { useEffect, useState } from 'react';
import { RenderTodo } from './components/RenderTodo';
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from './components/EditTodoForm';

function App() {
   

  const [todoes,setTodoes]= useState([]);
  useEffect(()=>{
    const localTodoes= localStorage.getItem('todoes')
    if(localTodoes){
      setTodoes(JSON.parse(localTodoes))
    }
  },[])
  

  const addTodo=(todo)=>{
    todo!==''?setTodoes([...todoes,{id: uuidv4(),task:todo,isComplete:false,isEdit:false}]):alert("add todo");
    
  }
  useEffect(()=>{
    localStorage.setItem('todoes',JSON.stringify(todoes))

  },[todoes])




  const toggleComplete = (id) => {
    setTodoes(
      todoes.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete} : todo
      )
    );
  }
  const deleteTodo=(id)=>{
           
    let newArray=todoes.filter((todo)=> {return id!==todo.id});
    setTodoes(newArray);
  }
  const editTodo=(id)=>{
         
   setTodoes(
    todoes.map((todo)=>
    todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
    )
   )
  }
  const editTask=(task,id)=>{

    setTodoes(
          todoes.map((todo)=>
          todo.id===id?{...todo,task,isEdit: !todo.isEdit}: todo
          )
    )
  }
  

  
  return (
    <div className="TodoWrapper">
      
      <TodoForm  addTodo={addTodo}  ></TodoForm>
      {todoes.map((todo) =>
        todo.isEdit ? (
          <EditTodoForm editTask={editTask} task={todo} key={todo.id} />
        ) : (
          <RenderTodo
           key={todo.id}
           task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      {/* <RenderTodo todoes={todoes} deleteTodo={deleteTodo} editTodo={editTodo}></RenderTodo> */}
      
    </div>
  );
}

export default App;
