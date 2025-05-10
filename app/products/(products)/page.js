import getProducts from '@/module/getProducts';
import Products from '@/components/Products';
async function ProductsPage() {
  const products = await getProducts();
  return (
      
        <ul className='products grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {products.length > 0 ?products.map((product)=> <li className='p-2' key={product._id}><Products item={product}/></li>):null}
         </ul>
  )
}

export default ProductsPage