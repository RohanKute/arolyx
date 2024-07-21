import { Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import { usePopup } from "../../context/popupContext";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function CartProduct({cartItem, handleRemovedItem}) {
  const { setPopup } = usePopup()
  

  const handleRemoveButton = async (e)=>{
      NProgress.start();
      e.preventDefault();
      const cartItemId = {
           id : Number(e.target.value)
      }
      const response = await axiosInstance.post ('/remove-cart-item', cartItemId);
      if(response.data.messege === 'success'){
        handleRemovedItem(cartItemId.id);
        setPopup({
          text: 'Item Deleted Succesfully',
          messege: 'success'
      });
      }
      NProgress.done();

  }
   return (
    <>
    { cartItem &&
      <div className="w-96 h-32 md:h-36 flex flex-row mr-2 mb-2 border rounded-lg bg-white p-4 shadow-lg">
       <div className="h-24 w-24 flex-shrink-0 ">
         <img
           className="object-cover h-full w-full rounded-lg"
           src={cartItem?.product?.img[0]?.url.replace('upload', 'upload/w_150,h_150')}
           alt="Product"
         />
       </div>
       <div className="flex flex-col justify-between w-full pl-4 text-black">
         <div className="flex flex-col">
         <Link to={`/products/${cartItem?.productId}`}>
         <h1 className="font-bold text-base md:text-lg hover:underline">{cartItem?.product?.name}</h1>
         </Link>

           <p className="text-gray-400 h-12  overflow-hidden text-xs md:text-sm">{cartItem?.product?.description}</p>
         </div>
         <div className="flex justify-between items-center mt-2">
            <div className="flex items-baseline">
              <p className="text-base md:text-lg font-semibold pr-1">₹ {cartItem?.product?.price}</p>
              <p className="text-sm md:text-base text-red-700 font-semibold line-through">₹ {cartItem?.product?.discountedPrice}</p>
            </div>
           <div className="flex items-center space-x-2 md:space-x-4">
             <p className="text-xs md:text-sm">Qty: {cartItem?.quantity}</p>
             <button onClick={handleRemoveButton} value={cartItem?.id} className="text-red-500 hover:text-red-700 text-xs md:text-sm">Remove</button>
           </div>
         </div>
       </div>
     </div>
    }
    </>
   );
 }
 