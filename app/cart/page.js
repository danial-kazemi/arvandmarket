'use client'
import React from 'react';
import Image from 'next/image'
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../context/Cart';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'

// const imageLoader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

function CartPage() {
  const {state, dispatch} = React.useContext(CartContext);
  const {cart: {cartItems}} = state;
const removeItemHandler = (itemId)=> {
  dispatch({type:'REMOVE_ITEM', payload: itemId}) 
}

const router = useRouter();
    
  return (
   <div>
    <h2 className='mb-4 text-xl'>Shopping Cart</h2>
    {
      cartItems.length === 0 ?
       <div>Cart is empty.</div> :
        <div className='grid md:grid-cols-4 md:gap5'>
          <div className='overflow-x-auto md:col-span-3'>
            <table className='min-w-full'>
              <thead className='border-b'>
                <tr>      
                  <th className='px-5 text-left'>Item</th>
                  <th className='px-5 text-left'>Quantity</th>
                  <th className='px-5 text-left'>Price</th>
                  <th className='px-5 text-left'>Action</th>             
                </tr>
              </thead>              
              <tbody className='border-b'>
                {cartItems.map((item)=> (
                  <tr key={item._id}>
                  <th className='flex px-5 items-center text-left'><span><Image 
 src={item.imgSrc} width={45} height={45} alt={item.title} /></span><span className='pl-2'>{item.title}</span></th>               
                  <th className='px-5 text-center'>{item.qty}</th>
                  <th className='px-5 text-center'>{item.price}</th>
                  <th className='px-5 text-center'><button onClick={()=> removeItemHandler(item._id)}> <FaTrash className='text-red-600' /> </button></th>             
                </tr>
                ))}
              </tbody>
            </table>
            <div className='p-5'>
                <div className='pb-5'>
                  Total price: {' '}
                  {cartItems.reduce((acc, cur)=> {
                    return acc + (cur.qty * cur.price)
                  }, 0)}
                </div>
          </div>
          <div className='redirect-to-checkout'>
            <button className='rounded-xl bg-gray-700 text-white px-4 py-2' onClick={()=>router.push('login?redirect=/checkout', { scroll: false })}>Checkout</button>
          </div>
          </div>          
        </div>
    }
   </div>
  )
}

export default dynamic(()=> Promise.resolve(CartPage), {ssr: false})