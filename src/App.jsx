import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Content from './Components/Pages/Content'
import Features from './Components/Pages/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      
    </>
  )
}

export default App
