import Footer from "../layout/Footer";
import NavBar from "../layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../parts/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { AuthProvider, useAuth } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axiosInstance";
import { PopupContextProvider, usePopup } from "../../context/popupContext";
import SuccessPopup from "../parts/SuccessPopup";
import FailPopup from "../parts/FailPopup";
import CartPage from "../pages/CartPage";


export default function MasterPage() {
    const [isAuth, setIsAuth] = useState(useAuth());
    const [popup, setPopup] = useState(usePopup())
    const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await axiosInstance.post('/auth');
            console.log(authStatus)
            if (authStatus.data.messege == "auth-success") {
                setIsAuth(true);
            } else {
                setIsAuth(false)
            }
        }
        checkAuth();
        setIsAuthStatusChecked(true);
    }, [])

    if (isAuthStatusChecked) {
        return (
            <>
                <PopupContextProvider value={{ popup, setPopup }}>
                    <AuthProvider value={{ isAuth, setIsAuth }} >
                        <Router>
                            <div className="container-sm top-0 h-screen">
                                <div className='fixed top-0 w-full z-50'>
                                    <NavBar />
                                </div>

                                <main className="container-m pt-16 m-auto">
                                    <div>
                                        {popup.messege == 'success' ? (<SuccessPopup></SuccessPopup>) : (<></>)}
                                        {popup.messege == 'fail' ? (<FailPopup></FailPopup>) : (<></>)}
                                    </div>
                                    <div className="flex justify-center">
                                        <Routes>
                                            <Route path="/products" element={
                                                <ProductPage />
                                            } />
                                            <Route path="/products/:id" element={
                                                <ProductDetails />
                                            } />
                                            <Route path='/login' element={
                                                <Login />} />
                                            <Route path='/signup' element={
                                                <Signup />} />
                                            <Route path='/cart' element={
                                                <CartPage />} />
                                        </Routes>
                                    </div>
                                    {/* <div> */}
                                        {/* <CartProduct/> */}
                                        {/* <Checkout/> */}
                                    {/* </div> */}

                                </main>
                                <div className="sticky top-[100vh]">
                                    <Footer />
                                </div>
                            </div>
                        </Router>
                    </AuthProvider>
                </PopupContextProvider>
            </>
        )
    }
}