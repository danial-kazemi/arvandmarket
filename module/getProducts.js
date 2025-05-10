import { cache } from "react";
 const getProducts = async()=> {
    try {
        const request = await fetch("http://127.0.0.1:3000/api/products")        
        const {products} = await request.json();        
        return products;

    } catch(error) {
        console.log('we have some error', error);        
    }    
  }

  export default getProducts 