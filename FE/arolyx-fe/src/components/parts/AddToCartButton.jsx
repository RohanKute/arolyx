import { useState } from "react"
import { axiosInstance } from "../../utils/axiosInstance";
import { usePopup } from "../../context/popupContext";

export default function AddToCartButton({ product, quantity }) {
   const [buttonText, setButtonText] = useState("Add to Cart");
   const { popup, setPopup } = usePopup();
   console.log(quantity)
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
            return
         }
         if (addToCartResponse.data.messege === 'success') {
            setPopup({
               text: `${quantity} Product(s) added successfully`,
               messege: 'success'
            });
            setButtonText('Add to Cart(Add More!)');
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
            className="w-full h-10 border-yellow-300 bg-yellow-300 rounded-lg text-gray-900 font-medium border shadow-sm content-center hover:bg-yellow-400 hover:border-none transition duration-300"
         >
            {buttonText}
         </button>
      </>
   );
}
