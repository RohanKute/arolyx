import React, { useState } from "react";

export default function QuantityInput({quantity, onChangeQuantity}) {
    const checkIfNumberAndSet = (e) => {
        e.preventDefault();
        const value = e.target.value.trim(); 
        if (value === "") {
            onChangeQuantity(0); 
        } else if (!isNaN(value)) {
            onChangeQuantity(parseInt(value)); 
        }
    };

    const reduceQuantity = () => {
        if (quantity > 0) {
            onChangeQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        onChangeQuantity(quantity + 1);
    };

    return (
<div className="flex border w-[96px] h-[32]]px]">
  <div className="flex items-center justify-center w-1/3">
    <button
      className="bg-slate-200 w-8 h-8 flex items-center justify-center text-2xl"
      onClick={reduceQuantity}
    >
      -
    </button>
  </div>
  <div className="flex items-center justify-center w-1/3">
    <input
      type="text"
      onChange={checkIfNumberAndSet}
      value={quantity}
      className="outline-none w-8 h-8 text-center"
    />
  </div>
  <div className="flex items-center justify-center w-1/3">
    <button
      className="bg-slate-200 w-8 h-8 flex items-center justify-center text-2xl"
      onClick={increaseQuantity}
    >
      +
    </button>
  </div>
</div>

    );
}
