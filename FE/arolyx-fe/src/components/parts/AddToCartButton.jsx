import { useState } from "react";
import { usePopup } from "../../context/popupContext";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { axiosInstance } from "../../utils/axiosInstance";

export default function AddToCartButton({ product, quantity }) {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [isLoading, setIsLoading] = useState(false);
  const { setPopup } = usePopup();

  const handleOnClick = async () => {
    try {
      setIsLoading(true);
      NProgress.start();

      if (!localStorage.getItem('token')) {
        setPopup({
          text: 'Login required',
          messege: 'fail'
        });
        setIsLoading(false);
        NProgress.done();
        return;
      }

      if (quantity > 0) {
        
        const addToCartResponse = await axiosInstance.post("/add-to-cart", {
          product: product,
          quantity: quantity,
        });

        if (addToCartResponse.data.messege === 'success') {
          setPopup({
            text: `${quantity} Product(s) added successfully`,
            messege: 'success'
          });
          setButtonText('Added to Cart (Add More!)');
        }
      } else {
        setPopup({
          text: 'Quantity should be more than 0',
          messege: 'fail'
        });
        setIsLoading(false);
        NProgress.done();
        return;
      }

      NProgress.done();
    } catch (error) {
      setPopup({
        text: 'Internal server error',
        messege: 'fail'
      });
      setIsLoading(false);
      NProgress.done();
    }
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        disabled={isLoading}
        className={`w-full h-10 border-yellow-300 bg-yellow-300 rounded-lg text-gray-900 font-medium border shadow-sm content-center transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400 hover:border-none'}`}
      >
        {buttonText}
      </button>
    </>
  );
}
