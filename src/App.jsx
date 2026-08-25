import React from 'react'
import Hero from './pages/Hero'
import Nav from './components/Nav'
const App = () => {
  return (
    <div>
      <Nav/>
      <div className='bg-[conic-gradient(from_180deg_at_bottom_right,_#020617_0%,_#0C4A6E_60%)] text-white h-screen'>
        <Hero/>
      </div>
    </div>
  )
}

export default App
