
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

 function Todos (){
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()

  return (
        <>
            <div>Todos</div>
             <ul className="list-none flex justify-center items-center flex-col ">
             {todos.map((todo)=>

                <li key={todo.id}
                className="bg-gray-900 p-2 w-[55%] flex rounded-xl m-2">
                    <div className="text-white w-[95%] text-left p-1 pl-3">{todo.todo}</div>

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