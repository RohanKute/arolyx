import { useEffect, useState } from "react"
import AdminNavbar from '../parts-layouts/AdminNavbar'
import { useAuth } from "../../../context/authContext";
import { AdminAuthProvider, useAdminAuth } from "../../../context/admin-context/adminAuthContext";
import AdminLogin from "../parts-layouts/AdminLogin";
import { AdminPopupContextProvider, useAdminPopup } from "../../../context/admin-context/adminPopupContext";
import { axiosInstanceAdmin } from "../../../utils/axiosInstanceAdmin";
import SuccessPopup from "../../parts/SuccessPopup";
import FailPopup from "../../parts/FailPopup";

export default function AdminMaster() {
    const [adminPopup, setAdminPopup] = useState(useAdminPopup())
    const [isAdminAuth, setIsAdminAuth] = useState(useAdminAuth())
    const [isAuthStatusChecked, setIsAuthStatusChecked] = useState(false);

    useEffect(() => {
        setIsAuthStatusChecked(false)
        localStorage.removeItem("token");
        try {
            const checkAuth = async () => {
                const response = await axiosInstanceAdmin.post('/admin-auth');
                if (response?.data?.messege === 'auth-success') {
                    console.log(response?.data?.messege);
                    // setAdminPopup({
                    //     text: 'Admin login success',
                    //     messege: 'success'
                    // })
                    setIsAdminAuth(true);
                    setIsAuthStatusChecked(true)

                } else {
                    // console.log(response.data.messege)
                    // setIsAdminAuth(false);
                    alert('login please')
                }
            }
            checkAuth();
        } catch (error) {
            console.log("error")
        }
    }, [])
    if (isAuthStatusChecked) {
        return (
            <>
                <div>
                    <AdminPopupContextProvider value={{ adminPopup, setAdminPopup }}>
                        <AdminAuthProvider value={{ isAdminAuth, setIsAdminAuth }}>
                            <div className="fixed top-0 w-full z-50">
                                <AdminNavbar />
                            </div>
                            {adminPopup.messege && (
                                <>
                                    {adminPopup.messege === 'success' && <SuccessPopup />}
                                    {adminPopup.messege === 'fail' && <FailPopup />}
                                </>
                            )}
                            <main className="container-m w-full    pt-16 m-auto">
                                {!isAdminAuth &&
                                    <div className="flex justify-center">
                                        <AdminLogin />
                                    </div>
                                }
                            </main>

                        </AdminAuthProvider>
                    </AdminPopupContextProvider>

                </div>
            </>
        )
    }
}