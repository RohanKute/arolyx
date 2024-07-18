import React, { useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { usePopup } from '../../context/popupContext';
import { useAuth } from '../../context/authContext';

export default function LogoutWarningPopup({ logoutPop, toggleLogoutPopup }) {
    const { popup, setPopup } = usePopup();
    const {isAuth , setIsAuth} = useAuth();
    const [loading, setLoading] = useState(false);
    
    const handleCancel = () => {
        toggleLogoutPopup(logoutPop);
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            NProgress.start();
            localStorage.clear();
            await new Promise(resolve => setTimeout(resolve, 1000))
            setPopup({
                text : 'Logged out succesfully',
                messege : 'success'
            })
            setIsAuth(false);
        } catch (error) {
            setPopup({
                text : 'Logout failed! Try later! ',
                messege : 'fail'
            })
            console.log(error);
        }
        setLoading(false);
        toggleLogoutPopup(logoutPop);
        NProgress.done();

    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={handleCancel}
            ></div>
            <div className="relative z-50 flex flex-col justify-center items-center w-80 h-40 bg-white border border-gray-300 rounded-lg shadow-xl p-4">
                <div className="mb-4">
                    <p className="text-gray-900 text-center text-lg font-semibold">
                        Are you sure you want to <span className='text-red-800'>Logout?</span>
                    </p>
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 text-gray-700 hover:text-black hover:font-semibold transition duration-150 focus:outline-none"
                        aria-label="Cancel delete action"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className={`${loading ? 'opacity-50 cursor-not-allowed ' : 'hover:bg-red-700'} px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
                        aria-label="Confirm delete action"
                    >
                        {loading ? 'Logging Out...' : 'Logout'}
                    </button>
                </div>
            </div>
        </div>
    );
}
