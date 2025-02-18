import React, { useState } from "react"
import { type TodoTitle } from "./type-d"

interface Props{
    saveTodo:({title}:TodoTitle)=>void
}

export const CreateTodo:React.FC<Props>=({saveTodo})=>{
    const[inputValue,setInputValue]=useState('')
     console.log(inputValue)
         
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>):void=>{
    event.preventDefault()
     saveTodo({title:inputValue})
     setInputValue('')
    }

    return(
        <form onSubmit={handleSubmit}>

              <input type="text"  className="new-todo" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} 
        onKeyDown={()=>{}}
        placeholder="¿que quieres Hacer?"
        autoFocus/>  
        </form>
    
    )
}