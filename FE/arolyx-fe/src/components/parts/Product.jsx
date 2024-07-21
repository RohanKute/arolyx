import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <div className="max-w-xs w-full border border-gray-200 shadow-lg m-3 flex flex-col overflow-hidden rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl duration-300 bg-white">
      <div className="w-full h-72 overflow-hidden">
        <img className="w-full h-full object-cover" src={product?.img[0]?.url} alt={product.name} />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1 capitalize">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2 overflow-hidden overflow-ellipsis" style={{ height: '3rem' }}>
              {product.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className='flex justify-center  items-baseline'>
            <p className="text-xl font-semibold text-blue-600 pr-1">&#8377; {product.discountedPrice}</p>
            <p className='text-xs pr-1'>MRP &#8377; <span className=' line-through'>{product.price}</span></p>
            <p className='text-xs text-red-700 font-bold '>{product.discount}% OFF</p>

          </div>
          <Link
            to={`${product.id}`}
            className="bg-yellow-300 text-gray-900 font-semibold py-1.5 px-4 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
