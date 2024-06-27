import { useEffect, useState } from "react";
import Filter from "../parts/Filter";
import Search from "../parts/Search";
import Product from "../parts/Product";

export default function ProductPage() {
   const [products, setProducts] = useState();

   useEffect(()=>{
       const getProduct = async()=>{
           try {
              const productsFromServer = axios.get('http://localhost:3000/user/see-products');
              console.log(products)
              if(products){
                 setProducts(productsFromServer)
              }
           } catch (error) {
            
           }
       }
   },[])

   return (
      <>
         <div className="flex justify-center" >
            <p className="text-black-800 font-bold pt-2 text-2xl">Products</p>
         </div>
         <div className="container-sm block justify-around items-center ">
            <div className="md:flex justify-center md:justify-start mt-4 md:mx-28 mx-24 p-1">
               <div className="basis-1/6 px-2 mt-1 ">
                  <Search />
               </div>
               <div className="basis-1/6 px-2 mt-2">
                  <Filter />
               </div>
            </div>
            <div className="flex justify-center flex-wrap">
               <Product />
               <Product />
               <Product />
               <Product />
               
            </div>
         </div>
      </>
   )
}