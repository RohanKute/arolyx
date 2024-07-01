import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import QuantityInput from "./QuantityInput";
import AddToCartButton from "./AddToCartButton";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();

    function onChangeQuantity(newQuantity){
        setQuantity(newQuantity);
    }
    useEffect(() => {
        const getProduct = async () => {
            try {
                const responseProduct = await axios.post('http://localhost:3000/user/get-product', {
                    id: id
                });
                console.log(responseProduct.data.img);
                setProduct(responseProduct.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        getProduct();
    }, [id]);



    if (!product) {
        return <p>Loading...</p>; // Optional: Show a loading state while waiting for data
    }

    return (
        <div className="flex flex-col max-w-5xl items-start sm:flex-row sm:justify-center border  shadow-sm shadow-slate-50 rounded-2xl bg-white px-5 py-5 m-4">
            <div className="border border-gray-300 shadow-sm">
                <ImageSlider images={product.img} />
            </div>
            <div className="flex flex-col h-full max-w-80 min-w-80 md:ml-4 ">
                <div className="md:ml-2">
                    <h1 className="capitalize  font-semibold text-black text-3xl">{product.name}</h1>
                </div>
                <div className="md:h-5/6">
                    <p className="mt-2 md:ml-2 text-slate-500">{product.description}</p>
                </div>
                <div>
                    <p className="mt-2 md:ml-2 text-gray-900 font-semibold text-2xl"><span>&#8377; </span>
                        {product.price}</p>
                </div>
                <div className="md:ml-2 mt-2 ">
                    <QuantityInput onChangeQuantity={onChangeQuantity}/>
                </div>
                <div className="md:ml-2 mt-2">
                     <AddToCartButton  product={product} quantity={quantity} />
                </div>
            </div>
        </div>
    );
}