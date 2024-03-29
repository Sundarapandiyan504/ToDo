import { useState } from "react";
import './app.css'
 export default function TodoForm(props){
    const[value,setValue]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value)return;
        props.addTodo(value);
        setValue("");
    };
    return(<>
    <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="add todo..." onChange={(e)=>setValue(e.target.value)}/>
    </form>
    </>)
 }