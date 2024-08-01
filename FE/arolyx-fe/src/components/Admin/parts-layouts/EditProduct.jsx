import React, { useState, useEffect } from 'react';
import { useAdminPopup } from '../../../context/admin-context/adminPopupContext';
import { axiosInstanceAdminForm } from '../../../utils/axiosInstanceAdmin';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import DetailsItems from './DetailsItems';

export default function EditProduct({ products, editProductId, handleSetEditId }) {
    const [selectedImageIndices, setSelectedImageIndices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState();
    const { setAdminPopup } = useAdminPopup();
    const [detailsArray, setDetailsArray] = useState([]);
    const [detailsValue, setDetailsValue] = useState();
    const [isMaxDetails, setIsMaxDetails] = useState();

    const handleDetailsAdd = (e) => {
        if (detailsArray.length >= 3) {
          setIsMaxDetails(true);
          return;
        }
        if (detailsValue.trim() !== '') {
          const arr = [...detailsArray, detailsValue];
          setDetailsArray(arr);
          setDetailsValue('');
        }
      }
    
    const handleChange = (e) => {
        setDetailsValue(e.target.value)
    }

    const handleRemoveElement = (item) => {
        const newArr = detailsArray?.filter((i) => i !== item);
        if(newArr.length < 3){
            setIsMaxDetails(false)
        }
        setDetailsArray(newArr);
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    useEffect(() => {
        if (editProductId !== null) {
            const product = products.find((product) => product.id === editProductId);
            if (product) {
                console.log(product.details.length)
                if(product?.details?.length ===  3){
                    setIsMaxDetails(true);
                }
                setDetailsArray(product.details)
                setFormData(product);
            }
        }
    }, []);

    const handleCancel = () => {
        handleSetEditId(null)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        NProgress.start();
        const formDataToSend = new FormData(e.target);
        formDataToSend.append('imgArr', selectedImageIndices);
        formDataToSend.append('id', editProductId);
        formDataToSend.append('detailsArray', detailsArray);

        try {
            const response = await axiosInstanceAdminForm.post('/update-product', formDataToSend);
            console.log(response.data)
            if (response.data.code === 1) {
                setAdminPopup({
                    text: "Product updated succesfully",
                    messege: 'success'
                })
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
        handleSetEditId(null);
        setLoading(false);
        NProgress.done();
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

    if (formData?.id) {
        return (
            <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black opacity-50"
                    onClick={handleCancel}
                ></div>
                <div className="overflow-y-scroll relative z-10 w-[700px] max-h-[600px] bg-white border border-amber-900 border-opacity-30 m-5 flex flex-col rounded-md p-5">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-start text-3xl ml-2 font-bold text-amber-900">Edit</h1>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col">
                                    <div className="flex flex-col pb-0.5">
                                        <label htmlFor="" className='pb-0.5 font-semibold'>Name</label>
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
                                    <div className="flex flex-col pb-0.5">
                                        <label htmlFor="" className='pb-0.5 font-semibold'>Description</label>                                    <textarea
                                            name="description"
                                            maxLength="75"
                                            className="w-72 max-h-28 min-h-28 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                                            placeholder="Description (max 75 characters)"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="flex flex-col pb-0.5">
                                        <label htmlFor="" className='pb-0.5 font-semibold'>Type</label>
                                        <input
                                            type="text"
                                            name="type"
                                            className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                            placeholder="Type"
                                            value={formData.type}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex p-2 pb-0.5">
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
                                    <div className="flex p-2 pb-0.5">
                                        <input
                                            type="checkbox"
                                            name="isBestSeller"
                                            className=""
                                            id="isBestSeller"
                                            checked={formData.isBestSeller}
                                            onChange={handleInputChange}
                                        />
                                        <label className="font-semibold ml-2" htmlFor="isBestSeller">
                                            Bestseller?
                                        </label>
                                    </div>
                                    <div className="m-auto flex items-end p-2">
                                        <label className="flex flex-col items-start">
                                            Add Details List(upto 3)
                                            <input
                                                type="text"
                                                name="details"
                                                value={detailsValue}
                                                onChange={handleChange}
                                                className="w-60 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                                placeholder="Detail(max 65 characters)"
                                                maxLength={65}

                                            />
                                        </label>
                                        <button disabled={isMaxDetails} type='button' onClick={handleDetailsAdd} className='w-12 m-0.5 h-11 hover:bg-slate-300 rounded-lg bg-slate-200 font-semibold'>Add</button>
                                        </div>

                                    <DetailsItems detailsArray={detailsArray} handleRemoveElement={handleRemoveElement} />
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex flex-col pb-0.5">
                                        <label htmlFor="" className='pb-0.5 font-semibold'>Price</label>
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
                                    <div className="flex flex-col pb-0.5">
                                        <label htmlFor="" className='pb-0.5 font-semibold'>Stock</label>
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
                                    <div className="flex flex-col pb-0.5">
                                        <label htmlFor="" className='pb-0.5 font-semibold'>Discount(%)</label>
                                        <input
                                            type="number"
                                            name="discount"
                                            className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                            placeholder="Discount"
                                            value={formData.discount}
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
                                    {formData?.img?.map((image) => (
                                        <img
                                            key={image.publicId}
                                            className={`size-28 m-2 ${selectedImageIndices.includes(image.publicId) ? 'brightness-50 border-4 border-sky-300' : ''}`}
                                            onClick={() => handleImageClick(image.publicId)}
                                            src={image.url}
                                            alt="Product"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="m-auto">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={`${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-400'} w-72 h-12 text-gray-800 font-medium text-center content-center bg-amber-200 rounded-md pl-2 transition duration-300 hover:bg-amber-400`}
                                >
                                    {loading ? "Saving..." : "Save"}

                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}