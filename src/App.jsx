import React from 'react'
import Navbar from './components/Navbar'
import Landing from "./components/Landing"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import FreeCard from './components/FreeCard'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white scroll-smooth'>
      <Navbar  />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <FreeCard />
      <Footer />
    </div>
  )
}

export default App
