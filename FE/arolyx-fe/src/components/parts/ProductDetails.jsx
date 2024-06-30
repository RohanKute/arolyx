import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

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
            <div className="flex flex-col items-start sm:flex-row sm:justify-center m-4">
                <div className="">
                    <ImageSlider images={product.img} />
                </div>
                <div className="flex flex-col max-w-80 min-w-80 ml-4">
                    <div>
                        <h1 className="capitalize font-medium text-black text-3xl">{product.name}</h1>
                    </div>
                    <p className="mt-2">{product.description}</p>
                    <p className="mt-2">Price: ${product.price}</p>
                </div>
            </div>
    );
}
