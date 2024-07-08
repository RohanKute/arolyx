import React, { useState } from "react";

export default function QuantityInput({quantity, onChangeQuantity}) {
    console.log(quantity)
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
        <div className="flex border w-[120px]">
            <div>
                <button
                    className="bg-slate-200 w-10 h-10 p-1 text-2xl"
                    onClick={reduceQuantity}
                >
                    -
                </button>
            </div>
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    onChange={checkIfNumberAndSet}
                    value={quantity}
                    className="outline-none w-10 h-10 p-1 text-center"
                />
            </div>
            <div>
                <button
                    className="bg-slate-200 w-10 h-10 p-1 text-2xl"
                    onClick={increaseQuantity}
                >
                    +
                </button>
            </div>
        </div>
    );
}
