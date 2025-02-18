import React from 'react'
import { type TodoTitle } from './type-d'

import { CreateTodo } from './CreateTodo'
interface Props{
onAddTodo:({title}:TodoTitle)=>void
}
const Header:React.FC<Props> = ({onAddTodo}) => {
  return (
    <header>
       <h1>todo<img src='https://www.typescriptlang.org/' style={{width:'60px',height:'auto'}}></img></h1> 
    <CreateTodo saveTodo={onAddTodo}></CreateTodo>
    </header>
  )
}

export default Header
