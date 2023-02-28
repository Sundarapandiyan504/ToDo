// import Todolist from "./ca3/Todolist";
// import TaskTrack from "./ca4/tasktracker.jsx";
// export default function App() {
  
//   return (
//     <>
//     <TaskTrack/>
//     {/* <Todolist></Todolist> */}
//    </>
//   );
//   }
import { useState } from "react";
import './ca4/app.css'
import TodoForm from "./ca4/form";
export default function App(){
  const [todos,setTodos]=useState([
    {
      text:"learn react",
      isCompleated:false,
    },
    {
      text:"build todo app",
      isCompleated:false, 
    }

  ]);
  const addTodo=(text)=>{
    const newTodos=[...todos,{text:text,isCompleated:false}];
    setTodos(newTodos);
  };
  const removeTodo=(e)=>{
    var index =Number(e.target.id);
    let temp=[...todos];
    temp.splice(index,1);
    setTodos(temp);
  };
  return(<>
  
  <center><h1>ToDo</h1></center>
  <header><br/>
  <div className="out"><br/><center>
  {todos.map((todo,i)=>(<div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text} (-)</div>))}
  <TodoForm addTodo={addTodo} /></center><br/>
  </div>
  </header>
  </>);
}

// export default function Navebar({menuitem}){
//   let number=menuitem;
//   const style={
//     color:"red",fontSize:"20",fontType:"Arial",backgroundcolor:"lightblue"
//   };
//   function handle(e){alert(`asdadasdsa${e.target.id}`)};
//   return(<>{number.map((item,i)=>(<button key={i} id={i} onClick={handle} style={style}>{item}</button>))}
//   <h1>ksadkasas</h1>
//   </>)
// }