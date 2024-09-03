import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Content from './Components/Pages/Content'
import Features from './Components/Pages/Features'
import Container from './Components/Layout/Container'
import Intergration from './Components/Pages/Intergration'
import Services from './Components/Pages/Services'
import Facts from './Components/Pages/Facts'
import Pricing from './Components/Pages/Pricing'
import Testimonial from './Components/Pages/Testimonial'
import Cta from './Components/Body/Cta'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <Container>

      <Content/>
      <Features/>
      <Intergration/>
      <Services/>
      <Facts/>
      <Pricing/>
      <Testimonial/>
      <Cta/>
      <Footer/>
    </Container>
      
    </>
  )
}

export default App
