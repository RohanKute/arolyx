import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <div className="max-w-xs w-full border border-gray-200 shadow-sm  m-3 flex flex-col  overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img className="w-full h-full object-cover" src={product.img[0].url} alt={product.name} />
      </div>
      <div className="p-4 flex flex-col  justify-around flex-grow">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h2>
          <p className="text-gray-700 text-sm mb-2 overflow-hidden overflow-ellipsis" style={{ height: '3rem' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas et sequi quos, ratione illo</p>
        </div>
        <div className="flex  justify-around">
          <p className="text-xl font-semibold text-gray-900 mb-2">&#8377; {product.price}</p>
          <div className="w-28 h-9  border-amber-700  text-gray-800 font-medium border shadow-sm text-center content-center hover:bg-amber-200  hover:border-none transition duration-300">
            <Link to={`${product.id}`}  >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
