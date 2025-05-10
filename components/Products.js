import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "/components/AddToCartBtn";
function Products({item}) {
    return(
    <div className="flex flex-col items-center bg-white rounded-xl pb-3 text-black">
        <Link href={`/products/${item.slug}`}>
            <div className="image-container p-2 relative flex justify-center max-h-52 max-w-full">
                <Image className="rounded-t-xl object-contain overflow-clip block" src={item.imgSrc} width={256} height={256} alt="products" />
            </div>
            <h2 className="text-sm px-2 leading-5 line-clamp-2 overflow-hidden ">{item.title}</h2>
        </Link>
        <div className="price p-2 flex">
            <span className="p-2 text-left inline-block w-full" aria-hidden="true">{item.price}</span>
        </div>
        <div>            
            <AddToCartBtn product={item}/>
        </div>
    </div>
    )
}
export default Products;