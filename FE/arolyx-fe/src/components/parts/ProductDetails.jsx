import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import QuantityInput from "./QuantityInput";
import AddToCartButton from "./AddToCartButton";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import InfoImage from "./InfoImage";

export default function ProductDetails({ handleCartChange, cartChange }) {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();

    function onChangeQuantity(newQuantity) {
        setQuantity(newQuantity);
    }
    useEffect(() => {
        const getProduct = async () => {
            try {
                NProgress.start()
                const responseProduct = await axios.post('http://localhost:3000/user/get-product', {
                    id: id
                });
                setProduct(responseProduct.data);
                NProgress.done()
            } catch (error) {
                console.error("Error fetching product:", error);
                NProgress.done()
            }
        };

        getProduct();
    }, [id]);

    console.log(product)
    if (!product) {
        return <p>Loading...</p>; // Optional: Show a loading state while waiting for data
    }

    return (
        <div className="flex flex-col md:h-[500px] w-auto rounded-lg  items-start sm:flex-row sm:justify-center   border   shadow-lg pl-0  bg-white  m-4">
             <div className="">
                <ImageSlider images={product.img} isBestSeller={product.isBestSeller} />
            </div>
            <div className="flex flex-col  justify-between h-full max-w-80 min-w-80 md:ml-4 p-3 ">
            <div>

                <div className="md:ml-2">
                    <h1 className="capitalize  font-bold  text-gray-900 text-3xl">{product.name}</h1>
                </div>
                <div className="h-16">
                    <p className="mt-2 md:ml-2 text-gray-500">{product.description.substring(0,75)}</p>
                </div>
                <div className="mx-4 my-2">
                    <ul class="list-disc">
                        {product?.details?.map((detail, index)=> <li className="text-sm font-semibold" key={index}>{detail}</li>)}
                    </ul>
                </div>

            </div>

            <div>
            <div className="mx-4 my-2">
                    <InfoImage />
                </div>
                <div className="flex  items-baseline">
                    <p className="mt-2 md:ml-2 text-blue-600 pr-1 font-bold text-2xl">&#8377; {product.discountedPrice}</p>
                    <p className='text-s pr-1'>MRP &#8377; <span className=' line-through'>{product.price}</span></p>
                    <p className='text-s text-red-700 font-bold '>{product.discount}% OFF</p>
                </div>
                <div className="md:ml-2 mt-2 ">
                    <QuantityInput quantity={quantity} onChangeQuantity={onChangeQuantity} />
                </div>
                <div className="md:ml-2 mt-2">
                    <AddToCartButton product={product} quantity={quantity} handleCartChange={handleCartChange} cartChange={cartChange} />
                </div>
                </div>
            </div>
        </div>
    );
}
