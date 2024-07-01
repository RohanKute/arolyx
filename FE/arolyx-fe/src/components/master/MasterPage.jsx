import Footer from "../layout/Footer";
import NavBar from "../layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ImageSlider from "../parts/ImageSlider";
import ProductDetails from "../parts/ProductDetails";


export default function MasterPage() {
    return (
        <>
            <div className="container-sm top-0 h-screen masterPage">
                <div className='fixed top-0 w-full z-50'>
                    <NavBar />
                </div>
                <main className="container-m pt-16 m-auto">
                  <div className="flex justify-center">
                     <Router>
                        <Routes>
                            <Route path="/products" element={
                                <ProductPage />
                            } />
                            <Route path="/products/:id" element={
                                <ProductDetails />
                            } />
                        </Routes>
                    </Router>
                     </div>
                </main>
                <div className="sticky top-[100vh]">
                    <Footer />
                </div>
            </div>

        </>
    )
}