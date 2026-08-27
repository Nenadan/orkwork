import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Gallery from './components/Hero/Gallery/Gallery'
import Process from './components/process'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
import ServiceAreas from './components/Serviceareas/ServiceAreas'

export default function Home() {
    return(
        <div>
            <Hero />
            <Services />
            <WhyUs />
            <Testimonials />
            <Gallery />
            <Process />
            <ServiceAreas />
            <Contact />
        </div>
    )
}