import React, { useContext } from 'react'
import { useState } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import './todo-item.css';

function TodoItem({ todo }) {
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const todoContext = useContext(TodoContext);
    const [name, setName] = useState(todo.title);
    return (
        <div style={{border:'3px solid red',padding:"5px",display:'flex',justifyContent:'space-between',marginTop:'20px'} }>
            {/* <div className="id">#{todo.id[0]}</div> */}
            <div><input type="checkbox"  width={'200px'}/></div>
            {toggleUpdate ?
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" /> :
                <div className="title">{todo.title}</div>
            }
            <div className="buttons">
                <div
                    onClick={() => {
                        setToggleUpdate(!toggleUpdate);
                        if (name !== '') {
                            todoContext.updateTodo({
                                id: todo.id,
                                title: name
                            });
                            // setName("");
                        }
                    }}
                    
                    >
                    {toggleUpdate ? "UPDATE" : <BiEditAlt/>}
                </div>
                <div
                    onClick={() => {
                        todoContext.removeTodo(todo.id);
                    }}
                   ><AiFillDelete/></div>
            </div>
        </div>
    )
}

export default TodoItem