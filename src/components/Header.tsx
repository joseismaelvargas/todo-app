import React from 'react'
import { type TodoTitle } from './type-d'

import { CreateTodo } from './CreateTodo'
interface Props{
onAddTodo:({title}:TodoTitle)=>void
}
const Header:React.FC<Props> = ({onAddTodo}) => {
  return (
    <header>
       <h1>todo<img src='https://tse3.mm.bing.net/th?id=OIP.vTTaLQ3lHcr8G6cNGmti9gHaEK&pid=Api&P=0&h=180' style={{width:'60px',height:'auto'}}></img></h1> 
    <CreateTodo saveTodo={onAddTodo}></CreateTodo>
    </header>
  )
}

export default Header
