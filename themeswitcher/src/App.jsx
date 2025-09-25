
import './App.css'
import ThemeBtn from './conponents/ThemeBtn'
import Card from './conponents/Card'
import { ThemeContextProvider } from './context/Theme'
import { useState } from 'react'
import { useEffect } from "react";

function App() {
  
  const [ThemeMode, setThemeMode] = useState('light')

    const LightMode =()=>{
      console.log('clicked')
    setThemeMode('light')
  }

  const DarkMode =()=>{
       console.log('clicked dark')
    setThemeMode('dark')
  }
    useEffect(()=>{

      const html=  document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(ThemeMode)
    },[ThemeMode])

  return (
    <ThemeContextProvider value={{ThemeMode, DarkMode, LightMode}}>
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
    </ThemeContextProvider>
  )
}

export default App
