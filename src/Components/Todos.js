import React from 'react'
import { TodoItem } from './TodoItem.js'

export const Todos = ({todos, onDelete}) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        {todos.length===0?"No todos to display":
        todos.map((item, index)=>{return <TodoItem todo={item} onDelete={onDelete}/>})}
    </div>
  )
}
