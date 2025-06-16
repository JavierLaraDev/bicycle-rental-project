import React from 'react'
import { Hero } from '../Components/Hero'
import { About } from '../Components/About'
import { Contact } from '../Components/Contact' 
import { Services } from '../Components/Services'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Contact />
    <Services />
    <Footer />
    </>
  )
}
