import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import QuantityInput from "./QuantityInput";
import AddToCartButton from "./AddToCartButton";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function ProductDetails({handleCartChange, cartChange}) {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();

    function onChangeQuantity(newQuantity){
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



    if (!product) {
        return <p>Loading...</p>; // Optional: Show a loading state while waiting for data
    }

    return (
        <div className="flex flex-col md:h-[500px] w-auto rounded-lg  items-start sm:flex-row sm:justify-center   border   shadow-lg pl-0  bg-white  m-4">
            <div className="">
                <ImageSlider images={product.img} />
            </div>
            <div className="flex flex-col h-full max-w-80 min-w-80 md:ml-4 p-3 ">
                <div className="md:ml-2">
                    <h1 className="capitalize  font-bold  text-gray-900 text-3xl">{product.name}</h1>
                </div>
                <div className="md:h-80">
                    <p className="mt-2 md:ml-2 text-gray-500">{product.description.substring(0,100)}</p>
                </div>
                <div>
                    <p className="mt-2 md:ml-2 text-gray-900 font-bold text-2xl"><span>&#8377; </span>
                        {product.price}</p>
                </div>
                <div className="md:ml-2 mt-2 ">
                    <QuantityInput quantity={quantity} onChangeQuantity={onChangeQuantity}/>
                </div>
                <div className="md:ml-2 mt-2">
                     <AddToCartButton  product={product} quantity={quantity} handleCartChange={handleCartChange} cartChange={cartChange} />
                </div>
            </div>
        </div>
    );
}
