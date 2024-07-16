import React from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
export const Top = () => {
  return (
    <div className='top'>
      <h2>I'm Gopi a Passionate Photographer from Salem City</h2>
      <p>“The best thing about a picture is that it never changes, even when the people will change.”</p>
      <div className="book-btn">
      <Link to='/contact'><h2 >Book</h2></Link>
      </div>
    </div>
  )
}
