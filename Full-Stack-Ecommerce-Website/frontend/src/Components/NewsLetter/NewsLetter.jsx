import React from 'react'
import '../NewsLetter/NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div> 
        <input type='email' placeholder='Your Email Id' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}
