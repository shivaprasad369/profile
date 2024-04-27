import { useState } from 'react'

import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/home'
import About from './Components/About'
import Contact from './Components/Contact'
import Foolter from './Components/Foolter'
import Projects from './Components/Projects'
import Education from './Components/Education'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      {/* <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>

      <Button className={ 'mt-10'} href={'#'}>hello world</Button>
      </div>
      <ButtonGradient/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Foolter/>
    </div>

  )
}

export default App
