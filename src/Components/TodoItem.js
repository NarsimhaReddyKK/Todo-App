import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="todo-item">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn-delete" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
