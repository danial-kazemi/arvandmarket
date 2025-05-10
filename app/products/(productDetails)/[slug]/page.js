import getProducts from "@/module/getProducts";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import AddToCartBtn from '@/components/AddToCartBtn'

export async function generateMetadata({ params, searchParams } ) {
  // read route params
  const slug = params.slug 
  // fetch data
  const products = await getProducts();  
  const product = products.find( product => product.slug === params.slug)
  return {
    title: product.title,    
  }
}

async function  ProductPage({params}) {
    const products = await getProducts();   
    const product = products.find( product => product.slug === params.slug) 
    
    
    return(
         <div className="container mx-auto grid grid-cols-12 p-4 gap-2 ">
            <div className="col-span-12 md:col-span-9">
              <div className="image-wrapper py-7">
                <div className="product-gallery">
                <Image src={product.imgSrc} width={500} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={product.title} loading="lazy" />
                </div>
                <div className="thumb"></div>
              </div>
          </div>
          <aside className="col-span-12 md:col-span-3 text-gray-950 pt-5 md:pt-0">
              <p className="">{`${product.title}`}</p>
              <p  className="">{`${product.cat}`}</p>
              <p  className="">{`${product.description}`}</p>
              <div className="mb-2 flex justify-between">
                  <div>Price: {product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                  <div>Status: {product.count > 0 ? product.count : 'Out of Stock'}</div>
              </div>
              <AddToCartBtn product = {product} />              
          </aside>     
         </div>
       
        
    )
}
export default ProductPage