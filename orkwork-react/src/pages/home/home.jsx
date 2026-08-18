import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Gallery from './components/gallery'
import Process from './components/process'

export default function Home() {
    return(
        <div>
            <Hero />
            <Services />
            <WhyUs />
            <Gallery />
            <Process />
        </div>
    )
}