import { useEffect, useState } from "react";

export default function Checkout({ userCart }) {
  const [total, setTotal] = useState({
      totalPrice : 0,
      totalDiscountedPrice : 0
  });

  const getWhatsappUrl = ()=>{
      const arolyxcontact = '+919767802672'
      let messege = "Hi Arolyx Team, I want to order:\n"
      userCart.forEach((item, index) => {
            messege+= `${index+1}) ${item.quantity} piece(s) of ${item.product.name},\n`
      });
      const url = `https://wa.me/${arolyxcontact}?text=${encodeURIComponent(messege)}`
      return url;
  }
  useEffect(() => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    for (let i = 0; i < userCart.length; i++) {
      totalPrice += parseInt(userCart[i].product.price) * parseFloat(userCart[i].quantity);
      totalDiscountedPrice += parseInt(userCart[i].product.discountedPrice) * parseFloat(userCart[i].quantity);

    }
    setTotal({
      totalPrice : totalPrice,
      totalDiscountedPrice  : totalDiscountedPrice
    })
  }, [userCart])
  return (
    <div className="w-96 h-600px flex flex-col m-0 border rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Cart Total</h1>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p>Subtotal:</p>
        <p className="font-semibold">₹{total.totalPrice}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold text-red-700">Discount:</p>
        <p className="font-bold text-red-700 text-lg">- ₹{total.totalPrice-total.totalDiscountedPrice}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold">Total:</p>
        <p className="font-bold text-lg">₹{total.totalDiscountedPrice}</p>
      </div>
      <a href={getWhatsappUrl()} target="_blank"className="bg-green-500 text-white py-2  text-center px-4 rounded-md hover:bg-green-600">
        Order on WhatsApp 
      </a>
      <p className="text-xs mt-2 text-gray-500">
        You can always change quantity and products via WhatsApp.
      </p>
    </div>
  );
}