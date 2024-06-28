import React from 'react';

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
          <a href={`/products/${product.id}`} className="w-2/4 text-center bg-yellow-300 text-black font-medium py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
            View
          </a>
        </div>
      </div>
    </div>
  );
}
