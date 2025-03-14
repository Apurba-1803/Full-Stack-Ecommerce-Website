import React, { useEffect, useState } from 'react'
import "../ListProduct/ListProduct.css";
import { RxCross2 } from "react-icons/rx";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async() =>{
    await fetch("https://full-stack-ecommerce-website-backend-d6ik.onrender.com/allproducts")
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo()
  },[])

  const remove_product = async (id) =>{
    await fetch("https://full-stack-ecommerce-website-backend-d6ik.onrender.com/removeproduct",{
      method:'POST',
      headers:{
        Accept:"application/json",
        'Content-Type': "application/json",
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo()
  }

  console.log("allproducts", allproducts)
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr/>
        {allproducts.map((product, index)=>{
             return <><div key = {index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <RxCross2  onClick= {()=>{remove_product(product.id)}} className="listproduct-remove-icon" />
             </div>
             <hr/>
             </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
