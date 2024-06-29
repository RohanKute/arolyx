import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams()
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
    }, []);

    if (!product) {
        return <p>Loading...</p>; // Optional: Show a loading state while waiting for data
    }

    return (
        <div className="block md:flex justify-center m-4">
            <div className="mr-4">
                 <ImageSlider images={product.img}/>
            </div>
            <div className="flex flex-col">
                 <div>
                      <h1 className="  capitalize font-medium text-black text-3xl">{product.name}</h1>
                 </div>
                <p>{product.description}</p>
                <p>Price: ${product.price.url}</p>
            </div>
        </div>
    );
}
