import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './conponents/Header'
import Banner from './conponents/Banner'
import Skills from './conponents/Skills';
import Projects from './conponents/Projects';
import Footer from './conponents/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
