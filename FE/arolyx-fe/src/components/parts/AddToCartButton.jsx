import { useState } from "react"
import { axiosInstance } from "../../utils/axiosInstance";
import { usePopup } from "../../context/popupContext";

export default function AddToCartButton({ product, quantity }) {
   const [buttonText, setButtonText] = useState("ADD TO CART");
   const { popup, setPopup } = usePopup();

   const handleOnClick = async () => {
      try {
         if (!localStorage.getItem('token')) {
            setPopup({
               text: 'Login required',
               messege: 'fail'
            });
            return;
         }
         let addToCartResponse = {};
         if(quantity > 0){
             addToCartResponse = await axiosInstance.post("/add-to-cart", {
               product: product,
               quantity: quantity,
            });
         } else{
            setPopup({
               text: `Quantity should be more than 0`,
               messege: 'fail'
            });
         }
         if (addToCartResponse.data.messege === 'success') {
            setPopup({
               text: `${quantity} Product(s) added successfully`,
               messege: 'success'
            });
            setButtonText('ADDED TO CART(ADD MORE!)');
         }
      } catch (error) {
         setPopup({
            text: 'Internal server error',
            messege: 'fail'
         });
      }
   };

   return (
      <>
         <button
            onClick={handleOnClick}
            className="w-full h-10 border-amber-900 text-gray-800 font-medium border shadow-sm content-center hover:bg-amber-200 hover:border-none transition duration-300"
         >
            {buttonText}
         </button>
      </>
   );
}
