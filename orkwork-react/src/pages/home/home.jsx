import React from 'react'
import Hero from './components/hero'
import Services from './components/services'
import WhyUs from './components/whyus'
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