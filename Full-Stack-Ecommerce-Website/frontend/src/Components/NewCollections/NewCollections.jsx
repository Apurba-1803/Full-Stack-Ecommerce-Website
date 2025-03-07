import React, { useEffect , useState} from 'react'
import "../NewCollections/NewCollections.css"

import {Item} from "../Item/Item"

export const NewCollections = () => {
  const [newCollectionProduct, setNewCollectionProduct] = useState([]);

  useEffect(()=>{
   fetch("https://full-stack-ecommerce-website-backend-d6ik.onrender.com/newcollections")
   .then((response)=>response.json())
   .then((data)=>setNewCollectionProduct(data))
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {newCollectionProduct.map((item, i) =>{
              return <Item key={i} id = {item.id} name={item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </div>
  )
}
