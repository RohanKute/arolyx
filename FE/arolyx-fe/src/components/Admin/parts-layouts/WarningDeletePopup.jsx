import React, { useState } from 'react';
import { useAdminPopup } from '../../../context/admin-context/adminPopupContext';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { axiosInstanceAdmin } from '../../../utils/axiosInstanceAdmin';

export default function WarningDeletePopup({handleSetDeleteId, deleteProductId, isDeleteOpen, toggleDeletePopup }) {
  const{adminPopup, setAdminPopup} = useAdminPopup();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    toggleDeletePopup(isDeleteOpen);
  };
  
  const handleDelete= async () => {
       try {
        setLoading(true);
        NProgress.start();
           const response = await axiosInstanceAdmin.post('/delete-product', { id : deleteProductId});
           console.log(response);
           toggleDeletePopup(isDeleteOpen);
           handleSetDeleteId(null)
           setAdminPopup({
               text : "Product deleted succesfully",
               messege : "success"
           })
           NProgress.done();
       } catch (error) {
           console.log(error);
       }
      setLoading(false);
  }
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDeleteOpen ? 'block' : 'hidden'}`}>
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleCancel}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-80 h-40 bg-white border border-gray-300 rounded-lg shadow-xl p-4">
        <div className="mb-4">
          <p className="text-gray-900 text-center text-lg font-semibold">
            Are you sure you want to delete this product?
          </p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 hover:text-black hover:font-semibold transition duration-150 focus:outline-none"
            aria-label="Cancel delete action"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled = {loading}
            className={`${loading ? 'opacity-50 cursor-not-allowed ' : 'hover:bg-red-700'} px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
            aria-label="Confirm delete action"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
