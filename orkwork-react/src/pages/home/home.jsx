import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Gallery from './components/Hero/Gallery/Gallery'
import Process from './components/process'
import Contact from './components/Contact/Contact'

export default function Home() {
    return(
        <div>
            <Hero />
            <Services />
            <WhyUs />
            <Gallery />
            <Process />
            <Contact />
        </div>
    )
}