'use client'
import {createContext, useReducer, useContext} from 'react';
import Cookies from 'js-cookie';
export const CartContext = createContext();
const initialState = {
    cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : {cartItems : []} 
}

const reducer = (state, action)=> {
    switch(action.type) {
        case 'ADD_ITEMS': {
            const newItem = action.payload
            const existingItem = state.cart.cartItems.find((item)=> item._id === newItem._id)  // if the item was exsist return that                                          
            const cartItems =  existingItem ? state.cart.cartItems.map(item => item._id === existingItem._id ? newItem : item) : [...state.cart.cartItems, newItem]  // Return an Array "Generate every time CartItems"
            Cookies.set('cart',JSON.stringify({
                ...state.cart, cartItems
            }))
       return { ...state, cart : {...state.cart, cartItems}}
        }
        case 'REMOVE_ITEM': {
            const itemId = action.payload                   
            const cartItems = state.cart.cartItems.map((item)=> {                              
                if(item._id === itemId) {                                  
                        return {...item, qty: item.qty - 1}                                                              
                } else {
                    return item 
                }                              
            } )
            const filtredCartItem = cartItems.filter((item)=> item.qty > 0)
            const filtredItemCount = filtredCartItem.reduce((acc, current)=> {
                return acc + current.qty
            },0)
            if(filtredItemCount > 0) {
                Cookies.set('cart', JSON.stringify({...state.cart, cartItems: filtredCartItem}))
            }else {
                Cookies.remove('cart')
            }
            return { ...state, cart : {...state.cart, cartItems: filtredCartItem}}
        }
        default :
             return state
    }
}

export function useCartContext() {
    return useContext(CartContext)
}

export default function CartContextProvider({children}) {
    const[state, dispatch]= useReducer(reducer, initialState);
    const value = {state, dispatch}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}