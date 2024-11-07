import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Unrestricted from './pages/Unrestricted'
import Home from './pages/Home'


interface User {
  id: string,
  username: string
}
function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/signin' element={<Signin setUser={setUser} />} />
        <Route path='/singup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard user={user} />} />
        <Route path='/unrestricted' element={<Unrestricted />} />
      </Routes>
    </div>
  )
}

export default App
