import SingleProduct from "./SingleProduct";
import TableHeader from "./TableHeader";
import React, { useEffect, useState } from "react";
import WarningDeletePopup from "./WarningDeletePopup";
import EditProduct from "./EditProduct";
import { axiosInstanceAdmin } from "../../../utils/axiosInstanceAdmin";
import { nanoid } from 'nanoid'
export default function Products() {
   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [isEditOpen, setIsEditOpen] = useState(false);
   const [products, setProducts] = useState([]);
   const [deleteProductId, setDeleteProductId] = useState(null);


   const handleSetDeleteId = (id) => {
      setDeleteProductId(id);
   }

   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await axiosInstanceAdmin.get('/see-products');
            if (response?.data) {
               console.log(response.data);
               setProducts(response.data.products);
            }
         } catch (error) {
            console.log("Error")
         }
      }
      getProducts()
   }, [deleteProductId])
   const toggleDeletePopup = (isDeleteOpen) => {
      setIsDeleteOpen(!isDeleteOpen)
   }

   const toggleEditPopup = (isEditOpen) => {
      setIsEditOpen(!isEditOpen)
   }
   return (
      <>
         <div>
            {products.length ?
               (
                  <>
                     <TableHeader />
                     {products.map((product) => (
                        <SingleProduct key={product.id + nanoid()} handleSetDeleteId={handleSetDeleteId} isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup} product={product} />
                     ))}
                  </>
               ) :
               (
                  <div>No products available</div>
               )}
         </div>
         <div>
            {isDeleteOpen && <WarningDeletePopup handleSetDeleteId={handleSetDeleteId} deleteProductId={deleteProductId} isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} />}
            {isEditOpen && <EditProduct isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup} />}
         </div>
      </>
   )
}