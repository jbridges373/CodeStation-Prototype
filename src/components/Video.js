import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Video.css'

import spaceVideo from '../assets/tube.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>CODE. STATION.</h1>
                <p>Your journey to coding the World begins here.</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    )
}

export default Video