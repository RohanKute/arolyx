import { useState } from 'react';
import img from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useAdminAuth } from '../../../context/admin-context/adminAuthContext';

export default function AdminNavbar() {
    const { isAdminAuth, setIsAdminAuth } = useAdminAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        setIsAdminAuth(false);
        setIsMenuOpen(false); // Close the menu after logout
    };

    return (
        <nav>
            {/* Navbar for large screens */}
            <div className="hidden md:flex h-14 rounded-b-3xl shadow-sm justify-around items-center border-b border-gray-200 bg-white">
                <div>
                    <img className='h-14' src={img} alt="arolyx-logo" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-amber-900'>Admin</p>
                </div>
                <div className="hidden md:flex justify-around text-black-700 text-l font-semibold">
                    {isAdminAuth && (
                        <NavLink
                            to='/'
                            className='text-red-700 mx-3 hover:bg-yellow-200 hover:rounded-md p-2'
                            onClick={handleLogout}
                        >
                            Logout
                        </NavLink>
                    )}
                </div>
            </div>

            {/* Navbar for small screens */}
            <div className="md:hidden flex h-14 rounded-b-3xl shadow-sm justify-between items-center border-b border-gray-200 bg-white px-4">
                <div>
                    <img className='h-14' src={img} alt="arolyx-logo" />
                </div>
                <div>
                    <p className='text-2xl font-bold text-amber-900'>Admin</p>
                </div>
                <div>
                    <button onClick={toggleMenu} className="focus:outline-none hover:bg-yellow-200 hover:rounded-full p-2">
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md rounded-b-3xl">
                    <div className="flex flex-col items-center text-black-700 text-l font-semibold">
                        {isAdminAuth && (
                            <NavLink
                                to='/'
                                className='text-red-700 my-3 hover:bg-yellow-200 hover:rounded-md p-2'
                                onClick={handleLogout}
                            >
                                Logout
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
