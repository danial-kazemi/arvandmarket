'use client'
import React from 'react';
import { CartContext } from '@/app/context/Cart';

function AddToCartBtn({product}) {    
    const {state, dispatch} = React.useContext(CartContext);
    const addToCartHandler= () => {       
        const existingItem = state.cart.cartItems.find((item) => item.slug === product.slug)            
        const qty = existingItem ? existingItem.qty + 1 : 1 
        if(product.count < qty) {
            alert('Product is out')
            return
        }
        dispatch({type:'ADD_ITEMS', payload: {...product, qty}})
    }
  return (
        <button onClick={addToCartHandler} className="rounded-x bg-red-500 text-white px-4 py-2 w-full">Add To Cart</button>
    )
}

export default AddToCartBtn