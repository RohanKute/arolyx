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
   const [editProductId, setEditProductId] = useState(null);
   const [productToEdit , setProductToEdit] = useState();

   const handleSetDeleteId = (id) => {
      setDeleteProductId(id);
   };

   const handleSetEditId = (id) => {
      setEditProductId(id);
   };

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
   }, [deleteProductId, editProductId]);

   const toggleDeletePopup = (isDeleteOpen) => {
      setIsDeleteOpen(!isDeleteOpen)
   }

   const toggleEditPopup = (isEditOpen) => {
      setIsEditOpen(!isEditOpen)
   };

   useEffect(() => {
      console.log(editProductId, ": editProductId");
      if (editProductId !== null) {
         const p = products.filter((product) => product.id === editProductId)[0];
         setProductToEdit(p);
      }
   },[editProductId])

   return (
      <>
         <div>
            {products.length ?
               (
                  <>
                     <TableHeader />
                     {products.map((product) => (
                        <SingleProduct key={product.id + nanoid()} handleSetEditId={handleSetEditId} handleSetDeleteId={handleSetDeleteId} isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup} product={product} />
                     ))}
                  </>
               ) :
               (
                  <div>No products available</div>
               )}
         </div>
         <div>
            {isDeleteOpen && <WarningDeletePopup handleSetDeleteId={handleSetDeleteId} deleteProductId={deleteProductId} isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} />}
            {isEditOpen && <EditProduct productToEdit={productToEdit} handleSetEditId={handleSetEditId} isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup} />}
         </div>
      </>
   )
}