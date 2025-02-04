import './App.css'
import { useState } from 'react';
import { Todos } from './components/Todos';

import {type Todo as TodoType,type TodoId}from '../src/components/type-d'

const mocktodo=[
  {
    id:'1',
    title:"EScribir un novelaa",
    completed:false
  },
  {
    id:'2',
    title:"Programar con python",
    completed:false
  },
  {
    id:'3',
    title:"Deployear Proyecto",
    completed:false
  },
  {
    id:'4',
    title:"Programar con javScript",
    completed:false
  },
  {
    id:'5',
    title:"Dayle Meet alas 5:Pm",
    completed:false
  },
  {
    id:'6',
    title:"Commitear Proyecto",
    completed:false
  },
]


const App=():JSX.Element=> {
 const [todos,setTodo]=useState(mocktodo)

 const handReduce=({id}:TodoId):void=>{
 const filter=todos.filter(todo =>todo.id!==id)
 console.log(filter)
  setTodo(filter)
 }
 const handleComplete=({id,completed}:Pick<TodoType,'id'|'completed'>):void=>{
  const newTodo=todos.map(todo=>{
    if(todo.id===id){
      return{
        ...todo,
        completed
      }
    }
    return todo
  })
setTodo(newTodo)
 }
   
  return(
  <> 
  <h1 className='title'>Mis Tareas 📄</h1>
  <div className='todoapp'>
    
 <p className='parrafo'>Marca las Tareas Completadas</p>

  <Todos todos={todos} togleComplete={handleComplete} hanleremove={handReduce}></Todos>
    </div>
  </>
  )

}

export default App
