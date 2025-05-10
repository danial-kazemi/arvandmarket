import React from 'react';

export const metadata = {
    title: "Dashboard",
    description: "Dashboard Page"
}
function CartPage({children}) {
  return (
    <section className='dashboard-page'>
        {children}
    </section>
  )
}

export default CartPage