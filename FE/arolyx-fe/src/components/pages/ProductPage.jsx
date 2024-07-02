import { useEffect, useState } from "react";
import Filter from "../parts/Filter";
import Search from "../parts/Search";
import Product from "../parts/Product";
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function ProductPage() {
   const [products, setProducts] = useState([]);
   const [productsAbsolute, setProductsAbsolute] = useState([]);
   useEffect(() => {
       const getProduct = async () => {
           try {
              NProgress.start()
              const productsResponse = await axios.get('http://localhost:3000/user/see-products');
              if (productsResponse.data.products) {
               setProductsAbsolute(productsResponse.data.products)
                 setProducts(productsResponse.data.products);
              }
              NProgress.done()
           } catch (error) {
               console.log(error);
               NProgress.done()

           }
       }
       getProduct();
   }, []);
   
   function onSearchHandle(searchTerm){
            if(searchTerm === ''){
               setProducts(productsAbsolute);
            } else{
               const searchedProducts = productsAbsolute.filter((product)=>(product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())));
               setProducts(searchedProducts);
            }
          
   }
   return (
      <>

         <div className="block w-full justify-around items-center">
         <div className="flex justify-center items-center">
            <p className="text-black-800 font-bold pt-2 text-2xl">Products</p>
         </div>
            <div className="md:flex justify-center md:justify-start mt-4 md:mx-28 mx-24 p-1">
               <div className="basis-1/6 px-2 mt-1">
                  <Search products={products} onSearchHandle={onSearchHandle} />
               </div>
               <div className="basis-1/6 px-2 mt-2">
                  <Filter />
               </div>
            </div>
            <div className="flex justify-center flex-wrap">
               {products.length > 0 ? (
                  products.map(product => (
                     <Product key={product.id} product={product} />
                  ))
               ) : (
                  <p>No products available</p>
               )}
            </div>
         </div>
      </>
   );
}
