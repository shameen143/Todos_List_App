import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";


function TodoList(){
    const[task,setTask]=useState('');
   const[todos,setTodos]=useState([]);
 


   useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem('todos'));
    if(storedTodos){
        setTodos(storedTodos);
    }
   },[]);


   useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
},[todos]);
  
       
   const handleItems=(e)=>{
    setTask(e.target.value)
    console.log(task)
   }

   const addTask=()=>{
    if(task.trim()!==''){
        setTodos([...todos, task]);
        setTask('')
        console.log(todos)
    }
}

const handleRemove=(index)=>{
   const newTodos=todos.filter((_, i) =>i !==index);
   setTodos(newTodos);

};
 

    return(
        <div className="main_div">
            
            <div className="center_div">
                <h2>ToDo List App</h2>
                 <div className="addItems">
                    <input type="text" value={task}  onChange={handleItems} placeholder="Add task..."/>
                    
                  <button onClick={addTask}>Add</button>
                  </div>

                 
                 <ul className="todo-list">
                    {todos.map((todo,index)=>(
                     <li key={index}>
                        {todo}
                       
                        <button onClick={()=>handleRemove(index)}><MdDelete /></button>
                       

                     </li>
                    ))}

                 </ul>
                </div>
                </div>
            
            
    )
}

export default TodoList;