import React from 'react';
import { ListOfTodos  } from './type-d';

 import { Todo } from './Todo';
 import {type Todo as TodoType,type TodoId}from './type-d'
  interface Props {
    todos: ListOfTodos
    togleComplete:({id,completed}:Pick<TodoType,'id'|'completed'>)=>void
    hanleremove:(id:TodoId)=>void

  }
  
  export const Todos: React.FC<Props> = ({ todos,hanleremove, togleComplete}) => {
    return (
      <ul className='todo-list'>
        {todos.map(todo => {
          return (
            <li key={todo.id} className={`${todo.completed ? 'completed':''}`}>
            
              <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} hanleremove={hanleremove}  togleComplete={ togleComplete}></ Todo>
            </li>
          );
        })}
      </ul>
    );
  };
  