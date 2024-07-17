import React from 'react'
import './About.css'
import image1 from '../../assets/image1.jpg'
const Middle = () => {
  return (
    <div className='works'>
        <h2>What I do</h2> 
        <p>I provide event videography services to clients looking for cinematography, photography</p>
        <div className='events'>
            <div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Model shoot</h5>
            </div>
            <div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Baby Shoot</h5>
            </div>
            <div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Astro</h5>
            </div>
            <div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Baby Shoot</h5>
            </div>
            <div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Baby Shoot</h5>
            </div>
            <div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Baby Shoot</h5>
            </div><div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Baby Shoot</h5>
            </div><div className="baby-shoot">
                <img src={image1} alt="" />
                <h5>Baby Shoot</h5>
            </div>
        </div>
    </div>
  )
}

export default Middle