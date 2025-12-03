import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {

        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (

        <form onSubmit={addTodoHandler}>
            <input type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="bg-gray-200 p-2 w-[50%] mt-5 font-medium text-black rounded-l-xl"
                placeholder="Write Tasks Here..."
            />

            <button
                type="submit"
                className="bg-blue-600 p-2 rounded-r-xl active:bg-blue-800 "
            >Add Task</button>
        </form>

    )
}

export default AddTodo

