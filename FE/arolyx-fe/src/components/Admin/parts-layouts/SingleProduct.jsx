import React, { useState } from "react";
import WarningDeletePopup from "./WarningDeletePopup";

const dummyProduct = {
    imageUrl: "https://images.pexels.com/photos/22697877/pexels-photo-22697877/free-photo-of-sunset-over-the-townhouses-at-zittau-main-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 12.99,
    stock: 20,
    makeVisibleToUser: true,
};

export default function SingleProduct({ product = dummyProduct , ...props}) {
    
    const handleDeleteButtonClicked = ()=>{
           props.handleSetDeleteId(product.id)
           props.toggleDeletePopup(props.isDeleteOpen)
    }
    

    const handleEditButtonClicked = () =>{
        props.handleSetEditId(product.id)
        props.toggleEditPopup(props.isEditOpen)

    }
    
    
    return (
        <>
            <div className="flex hover:bg-gray-50 bg-white shadow-sm border-r border-b m-0.5 h-14 ">
                <div className="w-24 flex justify-center border-r  border-l">
                    <img className="object-scale-down h-14 w-14 " src={product.img[0]?.url} alt="" />
                </div>

                <div className="flex m-1 border-r items-center justify-center w-44">
                    <p className="text-center text-gray-700 font-semibold text-base">{product.name}</p>
                </div>

                <div className="flex m-1 border-r  overflow-clip items-center justify-center w-96">
                    <p className="text-center  text-gray-700 font-semibold text-base">{product.description}</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-24">
                    <p className="text-center text-gray-700 font-semibold text-base">{product.price}</p>
                </div>


                <div className="flex m-1 border-r  items-center justify-center w-24">
                    <p className="text-center text-gray-700 font-semibold text-base">{product.stock}</p>
                </div>


                <div className="flex m-1 border-r items-center justify-center w-24">
                    <p className="text-center text-gray-700 font-semibold text-base">{product.makeVisibleToUser ? "Yes" : "No"}</p>
                </div>


                <div className="flex m-1 border-r  items-center justify-center w-24">
                    <button onClick={handleDeleteButtonClicked}className="text-center font-semibold text-red-500  hover:text-red-700 text-base"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>
                </div>

                <div className="flex m-1  items-center justify-center w-24 ">
                    <button  onClick={handleEditButtonClicked} className="text-center hover:text-blue-900 text-blue-400 font-semibold text-base"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    </button>
                </div>
            </div>

        </>
    );
}
