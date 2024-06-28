import { useEffect, useState } from "react";
import Filter from "../parts/Filter";
import Search from "../parts/Search";
import Product from "../parts/Product";
import axios from 'axios';

export default function ProductPage() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
       const getProduct = async () => {
           try {
              const productsResponse = await axios.get('http://localhost:3000/user/see-products');
              if (productsResponse.data.products) {
                 setProducts(productsResponse.data.products);
              }
           } catch (error) {
               console.log(error);
           }
       }
       getProduct();
   }, []);

   return (
      <>
         <div className="flex justify-center">
            <p className="text-black-800 font-bold pt-2 text-2xl">Products</p>
         </div>
         <div className="container-sm block justify-around items-center">
            <div className="md:flex justify-center md:justify-start mt-4 md:mx-28 mx-24 p-1">
               <div className="basis-1/6 px-2 mt-1">
                  <Search />
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
