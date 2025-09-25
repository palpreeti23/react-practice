import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);

  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWZYXabcdefghijklmnopqrstuvwxyz';
    if(character) str += '~!@#$%^&*()_+-?/{}[]'
    if(number) str += '0123456789'

    for (let index = 1; index <=length; index++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
      
    }
   setPassword(pass)
  
  },[length,character,number,setPassword])


   useEffect(()=>{
    passwordGenerator()
  },[length,character,number,passwordGenerator])



  return (
   
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="outline-none w-full py-1 px-3 bg-gray-300"
            placeholder="Password"
            value={password}
            readOnly

        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
       
         className="w-30 ml-2 accent-blue-600 mr-1"
        
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          checked={number}
          className=' accent-blue-600'
          onChange={()=>setNumber((prev)=>!prev)}
         
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              checked={character}
              id="characterInput"
               className=' accent-blue-600'
              onChange={()=>setCharacter((prev)=>!prev)}
            
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
