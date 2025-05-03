import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/NavBar'
import { Home } from './pages/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    </>
  )
}

export default App
