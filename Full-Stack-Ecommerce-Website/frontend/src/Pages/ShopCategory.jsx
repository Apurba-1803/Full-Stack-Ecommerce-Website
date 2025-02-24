import React, { useContext } from "react";
import "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";
import {Item} from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {allProduct} = useContext(ShopContext);
  console.log("all product in shop category", allProduct)
  return (<div className="shop-category">
  <div className="banner-img-box">
  <img className= "shopcategory-banner" src = {props.banner}  alt=""/>
  </div>
   
   <div className="shopcategory-indexSort">
    <p>
      <span>Showing 1-12</span> out of 36 products
    </p>
    <div className="shopcategory-sort">
      Sort by <IoIosArrowDropdown />
    </div>
   </div>
   <div className="shopcategory-products">
    { allProduct.map((item, i)=>{
      if(props.category=== item.category){
         return <Item key={i} id = {item.id} name={item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
      }
      else{
        return null
      }
    })}
   </div>
   <div className="shopcategory-loadmore">
         Explore More
   </div>
  </div>);
};
