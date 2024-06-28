import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams()
    useEffect(() => {
        const getProduct = async () => {
            try {
                const responseProduct = await axios.post('http://localhost:3000/user/get-product', {
                    id: id 
                });
                console.log(responseProduct.data);
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
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more details as needed */}
        </div>
    );
}
