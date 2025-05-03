import React from 'react'
import { Hero } from '../Components/Hero'
import { Services } from '../Components/Services'
import { NavBar } from '../Components/NavBar'
import { Experiencia } from '../Components/Experiencia'

export const Home = () => {
  return (
    <>
    <NavBar/>
    <header className='hero'>
      <Hero />
    </header>
    <main>
      <Services/>
      <Experiencia/>
    </main>
    </>
    
  )
}
