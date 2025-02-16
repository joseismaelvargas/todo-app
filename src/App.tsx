import './App.css'
import { useState } from 'react';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import {type Todo as TodoType,type TodoId, FilterValue}from '../src/components/type-d'
import { TODO_FILTERS } from './components/const';

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
 const [filterSelected,setFilterselected]=useState<FilterValue>(TODO_FILTERS.ALL)

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
 const handlefilterChange=(filter:FilterValue):void=>{
  setFilterselected(filter)
 }
 const filterTodos=todos.filter(todo=>{
  if(filterSelected===TODO_FILTERS.ALL)return todo
  if(filterSelected===TODO_FILTERS.ACTIVE)return !todo.completed
  if(filterSelected===TODO_FILTERS.COMPLETED) return todo.completed
 })
  const activeCount= todos.filter(todo=>!todo.completed).length
  const completedCount=todos.length-activeCount
  return(
  <> 
  <h1 className='title'>Mis Tareas 📄</h1>
  <div className='todoapp'>
    
 <p className='parrafo'>Marca las Tareas Completadas</p>

  <Todos todos={filterTodos} togleComplete={handleComplete} hanleremove={handReduce}></Todos>
    </div>
<Footer 
activeCount={activeCount}
completedCount={completedCount}
filterSelected={filterSelected}
onclearCompleted={()=>{}}
handlefilterChange={handlefilterChange}></Footer>
    
  </>
  )

}

export default App
