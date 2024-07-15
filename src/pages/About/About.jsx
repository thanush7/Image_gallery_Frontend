import React from 'react'
import './About.css'
import image from '../../assets/po.png'
import Contact from '../Contact/Contact'
import Middle from './Middle'
import Acheive from './Acheive'
const About = () => {
  return (
    <>
    <div className='about-container'>
        <div className="header-about">
            <div className="title">
                <p>Hello,</p>
                <b>I'm <span><b className='gopi-text'style={{color:'yellow'}}>Gopi</b></span></b>
                <h3>Photographer</h3>
                <p>Gifted and passionate photographer with a year of experience producing top-quality photos in the studio and outdoor settings.</p>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
    <Middle/>
    <Acheive/>
    </>
    
  )
}

export default About