import { Link, useNavigate } from 'react-router-dom'

import checkIfNumberAndSet from '../../utils/checkIfNumberAndSet';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { usePopup } from '../../context/popupContext';

export default function Login() {
    const { isAuth, setIsAuth } = useAuth();
    const { popup, setPopup } = usePopup();
    const [contachNumber, setContactNumber] = useState('');
    const setToNumber = (e) => {
        checkIfNumberAndSet(e, setContactNumber)
    }
    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = {
                number: e.target[0].value,
                password: e.target[1].value
            }
            const url = 'http://localhost:3000/user/onboard/login';
            const response = await axios.post(url, data);
            if (response.data.messege === 'login-success') {
                localStorage.setItem('token', response.data.token);
                history.go(-1);
                setIsAuth(true);
                setPopup({
                    text: 'Login success, Welcome!',
                    messege: 'success'
                });
            } else {
                setPopup({
                    text: response.data.messege,
                    messege: 'fail'
                });
            }
        } catch (error) {
            setPopup({
                text: 'internal-server-error',
                messege: 'fail'
            });
        }
    }
    return (
        <>
            <div className="w-[340px] border h-[400px] border-amber-900   border-opacity-30  m-5 flex flex-col  shadow-lg shadow-gray-200 rounded-md">
                <div >
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="mt-25">
                        </div>
                        <div className="flex flex-col gap-4 mt-24">
                            <h1 className="text-center text-3xl ml-4 font-bold text-amber-900">Log in</h1>
                            <div className="m-auto" >
                                <input type="text" name='number' onChange={setToNumber} value={contachNumber} className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4  placeholder:text-amber-900 placeholder:text-opacity-50" placeholder="Contact" />
                            </div>
                            <div className="m-auto">
                                <input type="password" name='password' className="w-72 h-10 border border-amber-900 focus:border-2 outline-none   rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50" placeholder="Password" />

                            </div>
                            <div className="m-auto">
                                <button className="w-72 h-10 text-gray-800 font-medium text-center content-center bg-amber-200  hover:bg-amber-400 transition duration-300  rounded-md pl-2 ">Login</button>
                            </div>
                            <div className='m-auto'>
                                <p>Dont have an account? <Link to='/signup' className='text-amber-900 underline'>Sign-up</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}