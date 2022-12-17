import React, { useState } from "react";

const ToDo = () => {
    const [todo, setTodo] = useState(""); // todo = ("test32")
    const [todos, setTodos] = useState([]); //{id: wewewe-2323232, todo : wewewew , id; x . todo : xx }
    const [editId, setEditId] = useState(0); 

    const handleSubmit = (e) =>{
        debugger
        e.preventDefault();
        if(editId){
            const editTodo = todos.find((i)=>i.id === editId);
            const updatedTodos = todos.map((t) => t.id == editTodo.id ? (t = { id:t.id, todo }) : {id: t.id, todo: t.todo});
            setTodos(updatedTodos);
            setEditId(0);
            setTodo("");
            return;
        }
        if(todo !== ""){
            setTodos([...todos,{id:`${todo}-${Date.now()}`, todo}]); //
            console.log(todos);
        }
        setTodo("");

    }
    const handleDelete = (id) =>{
        debugger
        const delTodo = todos.filter((remove)=>remove.id !== id);
        setTodos([...delTodo]);
    };
    const handleEdit = (id) =>{
        debugger
        const editTodo = todos.find((i)=>i.id === id); //editTodo = {id: wewewe-2323232, todo:wewewe}
        setTodo(editTodo.todo);
        setEditId(id);
    }
	return (
	<div className="container">
        <h1>To-Do List</h1>
        <div className="mainContainer">
            <form className="todoForm" onSubmit={handleSubmit}>
                <input type="text" id="task" value = {todo} placeholder="Enter here..." onChange={(e)=>{setTodo(e.target.value)}}></input>
                <button type="submit" id="btn">{editId? "Ok" : "Add To-Do"}</button>
            </form>
            <ul className="allToDos">
                {todos.map((list) =>(
                    <li className="list">
                        <span className="todoText">{list.todo}</span>
                        <span className="toDoEditters">
                            <button className = "edit" onClick={()=>{handleEdit(list.id)}}>Edit</button>
                            <button className = "delete" onClick={()=>{handleDelete(list.id)}}>Delete</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>       
	</div>
	);
}
export default ToDo;
