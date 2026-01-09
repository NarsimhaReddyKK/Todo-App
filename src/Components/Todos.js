import React from 'react'
import { TodoItem } from './TodoItem.js'

export const Todos = ({todos, onDelete}) => {
  return (
    <div className='todos-section'>
        <h3 className='todos-heading'>Todos List</h3>
        {todos.length===0?<div className="no-todos-message">No todos to display</div>:
        todos.map((item, index)=>{return <TodoItem key={item.sno} todo={item} onDelete={onDelete}/>})}
    </div>
  )
}
