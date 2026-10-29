import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
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