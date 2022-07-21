import React from 'react'
import '../styles/Training.css'

import {Link} from 'react-router-dom'

import Pic1 from '../assets/pic1.jpg'
import Pic2 from '../assets/pic2.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Insert writting here</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Pic1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pic2} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training