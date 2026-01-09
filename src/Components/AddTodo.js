import React, { useState } from 'react'

export const AddTodo = ({addtodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or Description is not defined")
            return;
        }
        addtodo(title, desc)
        setTitle("");
        setDesc("");
    }
    return (
        <div className='add-todo-section'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter todo title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter todo description"/>
                </div>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
    )
}
