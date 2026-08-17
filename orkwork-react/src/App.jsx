import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="orkwork-application">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
