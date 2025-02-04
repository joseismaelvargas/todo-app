import React from "react"
import {type Todo as TodoType,type TodoId}from './type-d'


interface Props extends TodoType{
    togleComplete:({id,completed}:Pick<TodoType,'id'|'completed'>)=>void
    hanleremove:({id}:TodoId)=>void
}
export const Todo : React.FC<Props>=({id,title,completed,hanleremove, togleComplete})=>{
    return(
        <div className="view" key={id}>
            <input
            className="toggle"
            checked={completed}
            type="checkbox"
            onChange={(event)=>{
                togleComplete({id,completed:event.target.checked})
            }} />
            <label htmlFor="">{title}</label>
            <button className="destroy" onClick={()=>{hanleremove({id})}}>

            </button>
        </div>

    )
}