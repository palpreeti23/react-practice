import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/AddTodo'
import AddTodo from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h2>hello redux & redux toolkit </h2>
    < Todos/>
   < AddTodo/>
  
   
    </>
  )
}

export default App
