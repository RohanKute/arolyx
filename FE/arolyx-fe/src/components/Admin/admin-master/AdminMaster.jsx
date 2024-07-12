import { useEffect, useState } from "react";
import AdminNavbar from '../parts-layouts/AdminNavbar';
import { AdminAuthProvider, useAdminAuth } from "../../../context/admin-context/adminAuthContext";
import AdminLogin from "../parts-layouts/AdminLogin";
import { AdminPopupContextProvider, useAdminPopup } from "../../../context/admin-context/adminPopupContext";
import { axiosInstanceAdmin } from "../../../utils/axiosInstanceAdmin";
import SuccessPopup from "../../parts/SuccessPopup";
import FailPopup from "../../parts/FailPopup";
import AdminSuccessPopup from "../parts-layouts/AdminSuccessPopup";
import Dashboard from "../pages/Dashboard";

export default function AdminMaster() {
    const [ adminPopup, setAdminPopup ] = useState(useAdminPopup());
    const [ isAdminAuth, setIsAdminAuth ] = useState(useAdminAuth());
    const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            setIsAuthStatusChecked(false);
            localStorage.removeItem("token");
            try {
                const response = await axiosInstanceAdmin.post('/admin-auth');
                console.log(response);
                if (response?.data?.messege === 'auth-success') {
                    console.log('Auth success:', response?.data?.message);
                    setAdminPopup({
                         text: "Login Success!",
                         messege: "success"
                    })
                    setIsAdminAuth(true);
                } else {
                    console.log('Auth failed:', response?.data?.message);
                    alert('Login please');
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
                    {adminPopup?.messege && (
                        <>
                            {adminPopup.messege === 'success' && <AdminSuccessPopup />}
                            {/* {adminPopup.messege === 'fail' && <FailPopup />} */}
                        </>
                    )}
                    <main className="container-m w-full pt-16 m-auto">
                        {!isAdminAuth ? (
                            <div className="flex justify-center">
                                <AdminLogin />
                            </div>
                        ) : (
                            // Render the main content for authenticated admin here
                            <div>
                                <Dashboard/>

                            </div>
                        )}
                    </main>
                </AdminAuthProvider>
            </AdminPopupContextProvider>
        </div>
    );
}
