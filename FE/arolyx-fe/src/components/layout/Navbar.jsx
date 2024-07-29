import { useEffect, useState } from 'react';
import img from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { axiosInstance } from '../../utils/axiosInstance';

export default function NavBar({ logoutPop, toggleLogoutPopup, cartChange }) {
    const { isAuth, setIsAuth } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [totalCartCount, setTotalCartCount] = useState(0);

    useEffect(() => {
        if (isAuth) {
            const calCount = async () => {
                try {
                    const response = await axiosInstance.get('/get-cart-count');
                    console.log(response)
                    if (response.data.count >= 0) {
                        setTotalCartCount(response.data.count);
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            calCount();
        } else{
            setTotalCartCount(0);
        }
    }, [cartChange, isAuth]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        console.log("clicked on logoutpopup: ", window.location.href)
        toggleLogoutPopup(logoutPop);
    };

    const handleButtonClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav>
            {/* Navbar for large screens */}
            <div className="hidden md:flex h-14 rounded-b-3xl  shadow-sm justify-around items-center border-b  bg-white border-gray-200">
                <div>
                    <Link to="/">
                       <img className='h-14' src={img} alt="arolyx-logo" />
                    </Link>
                </div>
                <div className="hidden md:flex justify-around text-black-700 text-l font-semibold">
                    <div>
                        <NavLink
                            to='/products'
                            className={({ isActive }) =>
                                isActive ? 'mx-3 underline underline-offset-8 decoration-amber-900 p-2' : 'mx-3 p-2 hover:bg-yellow-200 hover:rounded-md'
                            }
                        >
                            Products
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? 'mx-3 underline underline-offset-8 decoration-amber-900 p-2' : 'mx-3 p-2 hover:bg-yellow-200 hover:rounded-md'
                            }
                        >
                            About
                        </NavLink>
                    </div>
                    <div>
                        {isAuth ? (
                            <Link
                                className='text-red-700  mx-3 hover:bg-yellow-200 hover:rounded-md p-2'
                                onClick={handleLogout}
                            >
                                Logout
                            </Link>
                        ) : (
                            <NavLink
                                to='/login'
                                className={({ isActive }) =>
                                    isActive ? 'mx-3 underline underline-offset-8 decoration-amber-900 p-2' : 'mx-3 p-2 bg-yellow-200 rounded-md hover:bg-yellow-300 hover:rounded-md'
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
                <div>
                    <div className="hidden md:block hover:bg-yellow-200 hover:rounded-full p-3 relative">
                        <NavLink to='/cart' className="relative">
                            {totalCartCount > 0 &&
                                <div className="absolute font-semibold top-1 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 w-[18px] h-[18px] rounded-full flex items-center justify-center text-white text-xs">
                                    {totalCartCount}
                                </div>
                            }
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </NavLink>
                    </div>


                </div>
            </div>

            {/* Navbar for small screens */}
            <div>
                <div className="md:hidden block rounded-b-xl  shadow-sm bg-white justify-around items-center border-b border-gray-200">
                    <div className='flex justify-between items-center'>
                        <img className='h-14 mx-2' src={img} alt="arolyx-logo" />
                        <div className="md:hidden mx-4">
                            <button onClick={toggleMenu} className='hover:bg-yellow-200 hover:rounded-full p-2'>
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className='bg-white'>
                            <div className="text-black-700 text-l font-semibold">
                                <div className='my-3 mx-5'>
                                    <NavLink
                                        to='/products'
                                        className={({ isActive }) =>
                                            isActive ? 'underline underline-offset-4 decoration-amber-900  p-2' : 'hover:bg-yellow-200 hover:rounded-md p-2'
                                        } onClick={handleButtonClick}
                                    >
                                        Products
                                    </NavLink>
                                </div>
                                <div className='my-3 mx-5 '>
                                    <NavLink
                                        to='/about'
                                        className={({ isActive }) =>
                                            isActive ? 'underline underline-offset-4 decoration-amber-900   p-2' : 'hover:bg-yellow-200 hover:rounded-md  p-2'
                                        } onClick={handleButtonClick}
                                    >
                                        About
                                    </NavLink>
                                </div>
                                <div className='my-3 mx-5'>
                                    {isAuth ? (
                                        <NavLink
                                            to={window.location.pathname}
                                            className='text-red-700  hover:bg-yellow-200 hover:rounded-md p-2'
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </NavLink>
                                    ) : (
                                        <NavLink
                                            to='/login'
                                            className={({ isActive }) =>
                                                isActive ? 'underline underline-offset-4 decoration-amber-900 p-2' : 'hover:bg-yellow-200 hover:rounded-md p-2'
                                            }
                                            onClick={handleButtonClick}
                                        >
                                            Login
                                        </NavLink>
                                    )}
                                </div>
                            </div>
                            <div className="my-4 mx-5 p-2 hover:bg-yellow-200 hover:rounded-md" onClick={handleButtonClick}>
                                <NavLink to='/cart' className="relative">
                                    <div className="absolute top-1 left-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-semibold text-white text-xs">
                                        {totalCartCount}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
