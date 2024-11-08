import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { Toaster } from './components/ui/toaster.tsx'

axios.defaults.baseURL = 'https://test-task-o1hy.onrender.com';
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
