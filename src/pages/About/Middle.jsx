import React from 'react'
import './About.css'
import image1 from '../../assets/image1.jpg'
const Middle = () => {
  return (
    <div className='works'>
        <h2>What I do</h2> 
        <p>I provide event videography services to clients looking for cinematography, photography and post-production editing. My work includes capturing moments from the past with a unique perspective that is about creating memories not just photos.</p>
        <div className='events'>
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