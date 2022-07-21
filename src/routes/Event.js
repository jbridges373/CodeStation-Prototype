import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventCards from '../components/Event'
import HeroImage from '../components/HeroImage'

const Event = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='EVENTS.' text='Choose your destination.' />
            <EventCards />
            <Footer />
        </div>
    )
}

export default Event