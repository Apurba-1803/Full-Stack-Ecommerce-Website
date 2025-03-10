import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [allProduct, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("https://full-stack-ecommerce-website-backend-d6ik.onrender.com/allproducts")
        .then((response) => response.json())
        .then((data) => {
            console.log("Fetched Products:", data);
            setAllProduct(data);

            if(localStorage.getItem('auth-token')){
              fetch('https://full-stack-ecommerce-website-backend-d6ik.onrender.com/getcart',{
                method:'POST',
                headers:{
                  Accept:'application/form-data',
                  'auth-token':`${localStorage.getItem('auth-token')}`,
                  'Content-Type':'application/json',
                },
                body:"",
              }).then((response)=>response.json())
              .then((data)=>setCartItems(data))
            }
        })
        .catch((error) => console.error("Error fetching products:", error));
}, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('https://full-stack-ecommerce-website-backend-d6ik.onrender.com/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId": itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data))
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('https://full-stack-ecommerce-website-backend-d6ik.onrender.com/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId": itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data))
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };


  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item]
      }
    }
    return totalItems;
  };
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allProduct,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
