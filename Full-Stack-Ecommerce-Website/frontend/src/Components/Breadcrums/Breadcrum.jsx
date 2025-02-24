import React from 'react'
import "../Breadcrums/Breadcrum.css"
import { IoIosArrowForward } from "react-icons/io";

export const Breadcrum = (props) => {
    const {product} = props;
    return (
    <div className='breadcrum'>
        HOME <IoIosArrowForward /> Shop <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}
    </div>
  )
}
