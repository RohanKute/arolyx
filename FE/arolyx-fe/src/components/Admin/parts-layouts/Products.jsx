import SingleProduct from "./SingleProduct";
import TableHeader from "./TableHeader";
import React, { useEffect, useState } from "react";
import WarningDeletePopup from "./WarningDeletePopup";
import EditProduct from "./EditProduct";
import { axiosInstanceAdmin } from "../../../utils/axiosInstanceAdmin";

export default function Products() {
   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [products, setProducts] = useState([]);
   const [deleteProductId, setDeleteProductId] = useState(null);
   const [editProductId, setEditProductId] = useState(null);

   const handleSetDeleteId = (id) => {
      setDeleteProductId(id);
   };
   
   const handleSetEditId = (id)=>{
      setEditProductId(id); 
   }

   const toggleDeletePopup = () => {
      setIsDeleteOpen(!isDeleteOpen);
   }
   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await axiosInstanceAdmin.get('/see-products');
            if (response?.data) {
               setProducts(response.data.products);
            }
         } catch (error) {
            console.log("Error fetching products:", error);
         }
      }
      getProducts();
   }, [editProductId, deleteProductId]);

   return (
      <>
         <div>
            {products.length ? (
               <>
                  <TableHeader />
                  {products.map((product) => (
                     <SingleProduct
                        key={product.id}
                        handleSetEditId={handleSetEditId}
                        handleSetDeleteId={handleSetDeleteId}
                        isDeleteOpen={isDeleteOpen}
                        toggleDeletePopup={toggleDeletePopup}
                        product={product}
                     />
                  ))}
               </>
            ) : (
               <div>No products available</div>
            )}
         </div>
         <div>
            {isDeleteOpen && (
               <WarningDeletePopup
                  handleSetDeleteId={handleSetDeleteId}
                  deleteProductId={deleteProductId}
                  isDeleteOpen={isDeleteOpen}
                  toggleDeletePopup={toggleDeletePopup}
               />
            )}
            {editProductId  && (
               <EditProduct
                  editProductId = {editProductId}
                  products = {products}
                  handleSetEditId={handleSetEditId}
               />
            )}
         </div>
      </>
   );
}
