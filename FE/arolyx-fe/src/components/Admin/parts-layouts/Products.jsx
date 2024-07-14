import SingleProduct from "./SingleProduct";
import TableHeader from "./TableHeader";
import React, { useState } from "react";
import WarningDeletePopup from "./WarningDeletePopup";
import EditProduct from "./EditProduct";

export default function Products(){
   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [isEditOpen, setIsEditOpen] = useState(false);

   const toggleDeletePopup = (isDeleteOpen)=>{
       setIsDeleteOpen(!isDeleteOpen)
   }

   const toggleEditPopup = (isEditOpen)=>{
      setIsEditOpen(!isEditOpen)
  }
     return(
        <>
           <div>
               <TableHeader/>
               <SingleProduct   isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup}/>
               <SingleProduct  isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup}/>

               <SingleProduct  isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup} isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup}/>

               <SingleProduct/>

               <SingleProduct/>

               <SingleProduct/>

           </div>
           <div>
                {isDeleteOpen && <WarningDeletePopup isDeleteOpen={isDeleteOpen} toggleDeletePopup={toggleDeletePopup}/>}
                {isEditOpen && <EditProduct isEditOpen={isEditOpen} toggleEditPopup={toggleEditPopup}/>}
           </div>
        </>
     )
}