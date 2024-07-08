export default function Checkout() {
    return (
      <div className="w-96 h-600px flex flex-col m-0 border rounded-lg bg-white p-4 shadow-lg">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Cart Total</h1>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Subtotal:</p>
          <p className="font-semibold">₹1499.99</p>
        </div>
        <div className="flex justify-between items-center mb-6">
          <p>Total:</p>
          <p className="font-bold text-lg">₹1499.99</p>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
          Order on WhatsApp
        </button>
        <p className="text-xs mt-2 text-gray-500">
          You can always change quantity and products via WhatsApp.
        </p>
      </div>
    );
  }
  