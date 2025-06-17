import React from 'react'
import { Hero } from '../Components/Hero'
import { About } from '../Components/About'
import { Contact } from '../Components/Contact' 
import { Services } from '../Components/Services'
import { Footer } from '../Components/Footer'
import { QuienesSomos } from '../Components/QuienesSomos'

export const Home = () => {
  return (
    <>
    <Hero />
    <Services />
    <QuienesSomos />
    <Contact />
    <Footer />
    </>
  )
}
