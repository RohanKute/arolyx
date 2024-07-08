export default function CartProduct({cartItem}) {
   return (
     <div className="w-96 h-32 md:h-36 flex flex-row mr-2 mb-2 border rounded-lg bg-white p-4 shadow-lg">
       <div className="h-24 w-24 flex-shrink-0 ">
         <img
           className="object-cover h-full w-full rounded-lg"
           src={cartItem.product.img[0].url}
           alt="Product"
         />
       </div>
       <div className="flex flex-col justify-between w-full pl-4 text-black">
         <div className="flex flex-col">
           <h1 className="font-bold text-base md:text-lg">{cartItem.product.name}</h1>
           <p className="text-gray-400 h-12   overflow-hidden text-xs md:text-sm">{cartItem.product.description}</p>
         </div>
         <div className="flex justify-between items-center mt-2">
           <p className="text-base md:text-lg font-semibold">{cartItem.product.price}</p>
           <div className="flex items-center space-x-2 md:space-x-4">
             <p className="text-xs md:text-sm">Qty: {cartItem.quantity}</p>
             <button className="text-red-500 hover:text-red-700 text-xs md:text-sm">Remove</button>
           </div>
         </div>
       </div>
     </div>
   );
 }
 