import { useState } from "react";
import axios from "axios";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useAdminPopup } from "../../../context/admin-context/adminPopupContext";
import { useAdminAuth } from "../../../context/admin-context/adminAuthContext";


export default function AdminLogin() {
  const [adminSecret, setAdminSecret] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {adminPopup, setAdminPopup} = useAdminPopup();
  const {isAdminAuth, setIsAdminAuth} = useAdminAuth();
  

  const handleAdminSubmit = async (e) => {
    NProgress.start();
    e.preventDefault();
    if(e.target[0]?.value){
        const data = {
             secret : e.target[0].value
        }
        const response = await axios.post('http://localhost:3000/admin/admin-login', data);
        if(response?.data?.token){
            const token = response?.data?.token;
            console.log(token)
            localStorage.setItem('admin-token' , token);
            setAdminPopup({
                 text: 'Login Success',
                 messege : 'success'
            })
            setAdminPopup(true);

        }
    }
    setIsLoading(true);

  };

  return (
    <div className="w-[340px] border h-[400px] border-amber-900 border-opacity-30 flex flex-col shadow-lg shadow-gray-200 rounded-md">
      <form onSubmit={handleAdminSubmit}>
        <div className="flex flex-col gap-4 mt-24">
          <h1 className="text-center text-3xl  font-bold text-amber-900">Admin Log in</h1>
          <div className="m-auto">
            <input
              type="password"
              name="adminSecret"
              onChange={(e) => setAdminSecret(e.target.value)}
              value={adminSecret}
              className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
              placeholder="Admin Secret"
            />
          </div>
          <div className="m-auto">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-72 h-10 text-gray-800 font-medium text-center content-center bg-amber-200 rounded-md pl-2 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-400'}`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
