import React, { useState } from 'react';

const dummyProduct = {
    imageUrl: "https://images.pexels.com/photos/22697877/pexels-photo-22697877/free-photo-of-sunset-over-the-townhouses-at-zittau-main-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 12.99,
    stock: 20,
    makeVisibleToUser: true,
};

export default function EditProduct({ isEditOpen, toggleEditPopup }) {
    const [selectedImageIndices, setSelectedImageIndices] = useState([]);

    const handleCancel = () => {
        toggleEditPopup(isEditOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    const handleImageClick = (index) => {
        setSelectedImageIndices((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((i) => i !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isEditOpen ? 'block' : 'hidden'}`}>
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={handleCancel}
            ></div>
            <div className="overflow-y-scroll relative z-10 w-[700px] max-h-[600px] bg-white border border-amber-900 border-opacity-30 m-5 flex flex-col rounded-md p-5">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-start text-3xl ml-2 font-bold text-amber-900">Edit</h1>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col">
                                <div className="m-auto p-2">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                                        placeholder="Product Name"
                                        required
                                    />
                                </div>
                                <div className=" p-2">
                                    <textarea
                                        name="description"
                                        maxLength="75"
                                        className="w-72 max-h-28 min-h-28 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                                        placeholder="Description (max 75 characters)"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex p-2">
                                    <input type="checkbox" name="makeVisibleToUser" className="" id='makeVisible' required />
                                    <label className="font-semibold ml-2" htmlFor='makeVisible'>Make Visible to User
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className=" p-2">
                                    <input
                                        type="number"
                                        name="price"
                                        className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                        placeholder="Price"
                                        required
                                    />
                                </div>

                                <div className=" p-2">
                                    <input
                                        type="number"
                                        name="stock"
                                        className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                        placeholder="Stock"
                                        required
                                    />
                                </div>
                                <div className=" p-2">
                                    <label className="flex flex-col items-start">
                                        Select Images
                                        <input
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            multiple
                                            className="w-72 focus:border-2 outline-none outline-1"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <h1 className='ml-2  font-semibold'>Click on Image to remove</h1>
                            <div className='flex flex-wrap'>
                                {[...Array(10)].map((item, index) => (
                                    <img
                                        key={index}
                                        className={`size-28 m-2 ${selectedImageIndices.includes(index) ? 'brightness-50 border-2 border-amber-500' : ''}`}
                                        onClick={() => handleImageClick(index)}
                                        src={dummyProduct.imageUrl}
                                        alt={`Product Image ${index + 1}`}
                                    />
                                ))}
                            </div>

                        </div>
                        <div className="m-auto">
                            <button
                                type="submit"
                                className="w-72 h-12 text-gray-800 font-medium text-center content-center bg-gradient-to-r bg-amber-300 rounded-md pl-2 transition duration-300 hover:bg-amber-400"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
