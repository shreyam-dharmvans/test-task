import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup.tsx'
import Dashboard from './pages/Dashboard'
import Unrestricted from './pages/Unrestricted'
import Home from './pages/Home'
import { User } from './types/UserType'
import Header from './components/customComponents/Header'




function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      <Header setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin setUser={setUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard user={user} />} />
        <Route path='/unrestricted' element={<Unrestricted />} />
      </Routes>
    </div>
  )
}

export default App
