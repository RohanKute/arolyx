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
           className="w-full h-10  bg-amber-300 border shadow-sm hover:bg-amber-400   text-base font-medium text-gray-800">
                 {buttonText}
             </button>
        </>
     )
}