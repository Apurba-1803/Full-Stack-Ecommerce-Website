import React from 'react'
import '../Offers/Offers.css'
import exclusive_image from "../Assets/exclusive_image.jpeg"

export const Offers = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>

    </div>
    <div className="offers-right">
        <img src={exclusive_image} alt=''></img>
    </div>
    </div>
  )
}
 