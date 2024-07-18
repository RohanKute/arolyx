import { useEffect, useState } from "react";
import AdminNavbar from '../parts-layouts/AdminNavbar';
import { AdminAuthProvider, useAdminAuth } from "../../../context/admin-context/adminAuthContext";
import AdminLogin from "../parts-layouts/AdminLogin";
import { AdminPopupContextProvider, useAdminPopup } from "../../../context/admin-context/adminPopupContext";
import { axiosInstanceAdmin } from "../../../utils/axiosInstanceAdmin";
import AdminSuccessPopup from "../parts-layouts/AdminSuccessPopup";
import Dashboard from "../pages/Dashboard";
import AdminFailPopup from "../parts-layouts/AdminFailPopup";

export default function AdminMaster() {
    
    const [adminPopup, setAdminPopup] = useState(useAdminPopup());
    const [isAdminAuth, setIsAdminAuth] = useState(useAdminAuth());
    const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            setIsAuthStatusChecked(false);
            localStorage.removeItem("token");
            try {
                const response = await axiosInstanceAdmin.post('/admin-auth');
                console.log(response);
                if (response?.data?.messege === 'auth-success') {
                    setIsAdminAuth(true);
                } else {
                    setIsAdminAuth(false);
                }
            } catch (error) {
                console.error('Error during auth:', error);
                setIsAdminAuth(false);
            } finally {
                setIsAuthStatusChecked(true);
            }
        };
        checkAuth();
    }, [setIsAdminAuth]);

    if (!isAuthStatusChecked) {
        return <div>Loading...</div>; // Or any loading indicator
    }

    return (
        <div>
            <AdminPopupContextProvider value={{ adminPopup, setAdminPopup }}>
                <AdminAuthProvider value={{ isAdminAuth, setIsAdminAuth }}>
                    <div className="fixed top-0 w-full z-50">
                        <AdminNavbar />
                    </div>

                    <main className="container-m w-full mt-4">
                    <div className="fixed top-16 w-full z-40">
                                    {adminPopup.messege && (
                                        <>
                                            {adminPopup.messege === 'success' && <AdminSuccessPopup />}
                                            {adminPopup.messege === 'fail' && <AdminFailPopup />}
                                        </>
                                    )}
                                </div>
                        {!isAdminAuth ? (
                            <div className="flex mt-20  justify-center">
                                <AdminLogin />
                            </div>
                        ) : (
                            <div>
                                <Dashboard />
                            </div>
                        )}
                    </main>
                </AdminAuthProvider>
            </AdminPopupContextProvider>
        </div>
    );
}
