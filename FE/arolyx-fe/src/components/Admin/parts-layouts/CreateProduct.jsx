import { useState } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useAdminPopup } from '../../../context/admin-context/adminPopupContext';
import { axiosInstanceAdminForm } from '../../../utils/axiosInstanceAdmin';

export default function CreateProduct() {
  const {adminPopup , setAdminPopup} = useAdminPopup();
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    NProgress.start()
    try {
      const formData = new FormData(e.target);
      const response = await axiosInstanceAdminForm.post('http://localhost:3000/admin/create-product', formData);
      if(response.data.code === 0){
        setAdminPopup({
          text : 'Product Added Succesfully',
          messege : 'success'
       })
      } 
      e.target.reset();     
    } catch (error) {
      setAdminPopup({
        text : 'Interal server error',
        messege : 'fail'
     })
      console.error('Error:', error);
    }
    setIsLoading(false);
    NProgress.done()
  };

  return (
    <div className="w-fit border h-fit border-amber-900 border-opacity-30 m-5 flex flex-col shadow-lg shadow-gray-200 rounded-md">
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col gap-4 p-5">
            <h1 className="text-start text-3xl ml-2 font-bold text-amber-900">Create Product</h1>
            <div className='flex flex-col md:flex-row'>
              <div>
                <div className="m-auto p-2">
                  <input
                    type="text"
                    name="name"
                    className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                    placeholder="Product Name"
                    required
                  />
                </div>
                <div className="m-auto p-2">
                  <textarea
                    name="description"
                    maxLength="75"
                    className="w-72 max-h-28 min-h-28 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                    placeholder="Description (max 75 characters)"
                    required
                  ></textarea>
                </div>
                <div className="m-auto p-2">
                  <input
                    type="text"
                    name="type"
                    className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                    placeholder="Type"
                    required
                  />
                </div>
                <div className="m-auto p-2">
                  <label className="flex items-center">
                    Make Visible to User
                    <input type="checkbox" name="makeVisibleToUser" className="ml-2" />
                  </label>
                </div>
              </div>


              <div>
                <div className="m-auto p-2">
                  <input
                    type="number"
                    name="price"
                    className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                    placeholder="Price"
                    required
                  />
                </div>


                <div className="m-auto p-2">
                  <input
                    type="number"
                    name="stock"
                    className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                    placeholder="Stock"
                    required
                  />
                </div>
                <div className="m-auto p-2">
                  <input
                    type="number"
                    name="discount"
                    className="w-72 h-12 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                    placeholder="Discount"
                    required
                  />
                </div>
                <div className="m-auto p-2">
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

            <div className="m-auto">
              <button
               disabled = {isLoading}
                type="submit"

                className={`${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-400'} w-72 h-12 text-gray-800 font-medium text-center content-center bg-amber-200 rounded-md pl-2 transition duration-300 hover:bg-amber-400`}
              >
                {isLoading ? "Creating" : "Create Product"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
