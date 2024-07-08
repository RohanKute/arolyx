import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import CartProduct from "../parts/CartProduct";
import Checkout from "../parts/Checkout";
import img from '../../assets/logo.png';
import { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axiosInstance";


export default function CartPage() {
    const { isAuth, setIsAuth } = useAuth();
    const [userCart , setUserCart] = useState([]);
    useEffect(() => {
        const getCart = async () => {
            try {
                const responseUserCart = await axiosInstance.get('http://localhost:3000/user/get-cart');
                setUserCart(responseUserCart.data);
        } catch (error) {

       }
        }
        getCart()
    },[])

    if (isAuth) {
        return (<>
            <div className="flex flex-col mt-2">
                <div className="flex justify-center">
                    <h1 className="font-bold text-lg">My cart</h1>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="m-3">
                        {userCart.map((cartItem)=>{
                              return <CartProduct key={cartItem.id}  cartItem={cartItem}/>
                        })}
                    </div>
                    <div className="m-3">
                        <Checkout />
                    </div>
                </div>
            </div>
        </>)
    } else {
        return (<>
            <div className="flex  flex-col justify-center  mt-5">
                <h1 className="font-bold  capitalize text-xl">Please <Link to='/login' className='underline text-amber-950'>login</Link> see your cart :)</h1>
                <img src={img} alt="" className=" h-40 w-76 md:h-52 md:w-96 m-auto items-center" />
            </div>
        </>)
    }
}