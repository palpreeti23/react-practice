
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

 function Todos (){
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()

   const [todoMsg, setTodoMsg] = useState('')
   const [isEdited, setIsEdited] = useState(null)

   const editTodo  = (todo)=>{
    setTodoMsg(todo.todo)
    setIsEdited(todo.id)
   }

   const saveTodo= ()=>{
    dispatch(updateTodo({id: isEdited, todo: todoMsg}))
    setTodoMsg('')
    setIsEdited(null)
   }



  return (
        <>
            <div>Todos</div>
             <ul className="list-none flex justify-center items-center flex-col ">
             {todos.map((todo)=>
                <li key={todo.id}
                className="bg-gray-900 p-2 w-[55%] flex rounded-xl m-2">
                   {isEdited === todo.id ? (
                    <input type="text"
                    value={todoMsg}
                    onChange={((e)=>setTodoMsg(e.target.msg))}
                     className="w-[95%] text-black p-1 rounded-lg"

                     />
                   ):(
                   <div className="text-white w-[95%] text-left p-1 pl-3">{todo.todo}</div>
                   )}
                    
                    {isEdited === todo.id ? (
                   <button className="bg-green-400 px-3 rounded-lg mr-1"
                    onClick={saveTodo}
                    >
                        S
                    </button>
                    ):(
                      <button className="bg-green-300 px-3 rounded-lg mr-1 hover:bg-green-500"
                    onClick={()=>editTodo(todo)}
                    >
                        E
                    </button>

                    )}

                    <button className="bg-red-500 w-[5%] text-center rounded-xl"
                    onClick={()=>dispatch(removeTodo(todo.id))}
                    >
                        X
                    </button>
                </li>
        
            )}
                </ul>
        </> 

    )

 }

 export default Todos