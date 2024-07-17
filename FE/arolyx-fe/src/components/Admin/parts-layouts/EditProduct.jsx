import React, { useState } from 'react';
import { axiosInstanceAdminForm } from '../../../utils/axiosInstanceAdmin';
import { useAdminPopup } from '../../../context/admin-context/adminPopupContext';

export default function EditProduct({ productToEdit, handleSetEditId, isEditOpen, toggleEditPopup }) {


    const [selectedImageIndices, setSelectedImageIndices] = useState([]);
    const [formData, setFormData] = useState(productToEdit);
    const {adminPopup, setAdminPopup} = useAdminPopup();
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleCancel = () => {
        toggleEditPopup(isEditOpen);
        handleSetEditId(null);
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData(e.target);
        formDataToSend.append('imgArr', selectedImageIndices);
        formDataToSend.append('id', productToEdit.id);

        try {
            const response = await axiosInstanceAdminForm.post('/update-product', formDataToSend);
            if(response.data.code === 1){
                setAdminPopup({
                    text : "Product updated succesfully",
                    messege : 'success'
                })
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
        handleSetEditId(null)
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
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleCancel}></div>
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
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className=" p-2">
                                    <textarea
                                        name="description"
                                        maxLength="75"
                                        className="w-72 max-h-28 min-h-28 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                                        placeholder="Description (max 75 characters)"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex p-2">
                                    <input
                                        type="checkbox"
                                        name="makeVisibleToUser"
                                        className=""
                                        id="makeVisible"
                                        checked={formData.makeVisibleToUser}
                                        onChange={handleInputChange}
                                    />
                                    <label className="font-semibold ml-2" htmlFor="makeVisible">
                                        Make Visible to User
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
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className=" p-2">
                                    <input
                                        type="number"
                                        name="stock"
                                        className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                        placeholder="Stock"
                                        value={formData.stock}
                                        onChange={handleInputChange}
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
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="ml-2 font-semibold">Click on Image to remove</h1>
                            <div className="flex flex-wrap">
                                {productToEdit?.img?.map((image) => (
                                    <img
                                        key={image.publicId}
                                        className={`size-28 m-2 ${selectedImageIndices.includes(image.publicId) ? 'brightness-50 border-2 border-amber-500' : ''}`}
                                        onClick={() => handleImageClick(image.publicId)}
                                        src={image.url}
                                        alt="Product"
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
