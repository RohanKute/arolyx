import { useState } from "react"

export default function AddToCartButton({product, quantity}){
     const [buttonText, setButtonText] = useState("ADD TO CART");
     const handleOnClick = async ()=>{
          try {
            // create axios instance in utils with headers
               if(!localStorage.getItem('token')){
                  alert("login first")
               }
              const addToCartResponse = await axios.post("", {
                  product : product,
                  quantity : quantity,
              })
              if(addToCartResponse.data.messege = 'success'){
                  setButtonText('ADDED TO CART')
              }
          } catch (error) {
               
          }
     }
     return(
        <>
           <button 
           onClick={handleOnClick}
           className="w-full h-10  border-amber-700  text-gray-800 font-medium border shadow-sm  content-center hover:bg-amber-200  hover:border-none transition duration-300">
                 {buttonText}
             </button>
        </>
     )
}