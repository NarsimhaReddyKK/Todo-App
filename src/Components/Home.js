import Header from './Header';
import { Todos } from './Todos';
import { Footer } from './Footer';
import { useState } from 'react';
import { AddTodo } from './AddTodo';

export const Home = () => {

    const [todos, setTodos] = useState([]);
    const onDelete = (todo) => {
        console.log("I am delete")
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
    }

    const addtodo = (title, desc) => {
        let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1
        let newtodo = { sno: sno, title: title, desc: desc }
        setTodos([...todos, newtodo])
        console.log([...todos])
    }
    return (
        <div>
            <Header SearchBar={true} />
            <AddTodo addtodo={addtodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </div>
    )
}
