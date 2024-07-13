import React from "react";

const dummyProduct = {
    imageUrl: "https://images.pexels.com/photos/22697877/pexels-photo-22697877/free-photo-of-sunset-over-the-townhouses-at-zittau-main-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 12.99,
    stock: 20,
    makeVisibleToUser: true,
};

export default function SingleProduct({ product = dummyProduct }) {
    return (
        <>
            <div className="flex hover:bg-gray-50 bg-white shadow-sm border-r border-b m-0.5 h-14 ">
                <div className="w-24 flex justify-center border-r overflow-hidden border-l">
                    <img className="object-scale-down rou h-14 w-14 "src={product.imageUrl} alt="" />
                </div>

                <div className="flex m-1 border-r items-center justify-center w-44">
                    <p className="text-center font-semibold text-base">{product.name}</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-96">
                    <p className="text-center font-semibold text-base">{product.description}</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-24">
                    <p className="text-center font-semibold text-base">{product.price}</p>
                </div>


                <div className="flex m-1 border-r  items-center justify-center w-24">
                    <p className="text-center font-semibold text-base">{product.stock}</p>
                </div>

        
                <div className="flex m-1 border-r items-center justify-center w-24">
                    <p className="text-center font-semibold text-base">{product.makeVisibleToUser ? "Yes" : "No"}</p>
                </div>

        
                <div className="flex m-1 border-r  items-center justify-center w-24">
                    <button className="text-center font-semibold text-red-600  hover:text-red-700 text-base">Delete</button>
                </div>

                <div className="flex m-1  items-center justify-center w-24 ">
                    <button className="text-center hover:text-blue-900 text-blue-400 font-semibold text-base">Edit</button>
                </div>
            </div>
        </>
    );
}
