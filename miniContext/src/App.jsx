
import './App.css'
import UserContex from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>

     <Login />
     <Profile />

    </UserContextProvider>
  )
}

export default App
