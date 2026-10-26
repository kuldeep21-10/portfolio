import React from 'react'
import Header from './components/header'
import Button from './components/button'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-[#14211c] min-h-screen '>

      <Header/>
      <Button/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App