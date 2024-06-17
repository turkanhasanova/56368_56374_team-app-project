import React, { useContext } from 'react'
import Header from './Header'
import Hero from './Hero'
import { ModeContext } from '../context/ModeContext'
import Footer from './Footer'

const Home = ({user}) => {
    const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
        <Header  user={user}/>
        <Hero />
        <Footer />
    </div>
  )
}

export default Home