'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdHome, MdOutlineDataUsage, MdDashboard, MdShoppingCart} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {useContext, useEffect, useState} from "react";
import { CartContext } from "@/app/context/Cart";


function Navbar() {
    const [cartItemsCount, setCartItemsCount] = useState();
    const {state, dispatch} = useContext(CartContext);
    useEffect(()=> {
        setCartItemsCount(state.cart.cartItems.reduce((acc, current) =>  acc + current.qty
            ,0))
    },[state.cart.cartItems])
    const mianMenuItems = {
        leftMenu: [
            {
                title: "Home",
                link: '/',
                icon: <MdHome size={30}/>
            },
            {
                title: "Products",
                link: '/products',
                icon: <MdOutlineDataUsage size={30}/>
            },
            {
                title: "Dashboard",
                link: '/dashboard',
                icon: <MdDashboard size={30}/>
            }
        ],
        rightMenu: [
            {
                title: "cart",
                link: '/cart',
                icon: <MdShoppingCart size={25}/>
            },
            {
                title: "user",
                link: '/user',
                icon: <FaUser size={25}/>
            },
        ]
    }
    
  return (
    <nav className="flex items-center justify-between border-b-slate-50">
        <ul className="flex">
            {mianMenuItems.leftMenu.map((item)=> 
            <li className="p-2" key={item.title}><Link className="flex items-center flex-row rounded-sm" href={item.link}><span className="icon p-2">{item.icon}</span><span className="title p-2">{item.title}</span></Link></li>)}
        </ul>
        <ul className="flex">
                {mianMenuItems.rightMenu.map(item => 
                    item.title === "cart" ?
                                <li className="p-2" key={item.title}>
                                    <Link className="flex items-center relative" href={item.link}>
                                     <span className="icon p-2">{item.icon}</span>
                                     {state.cart.cartItems.length > 0 && (<span className="absolute flex justify-center items-center text-sm bottom-0 right-1/2 text-black bg-white w-5 h-5 rounded-full">{cartItemsCount}</span>)}
                                 </Link>
                                 </li>:
                            
                            <li className="p-2" key={item.title}><Link className="flex items-center relative" href={item.link}><span className="icon p-2">{item.icon}</span></Link></li>

                )}
        </ul>
    </nav>
  )
}

export default dynamic(()=> Promise.resolve(Navbar), {ssr: false})