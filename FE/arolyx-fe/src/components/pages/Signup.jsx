import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import checkIfNumberAndSet from '../../utils/checkIfNumberAndSet';
import { usePopup } from '../../context/popupContext';
import { useAuth } from '../../context/authContext';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function Signup() {
    const [contactNumber, setContactNumber] = useState('');
    const { setIsAuth } = useAuth();
    const { setPopup } = usePopup();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const setToNumber = (e) => {
        checkIfNumberAndSet(e, setContactNumber);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            NProgress.start();

            const data = {
                name: e.target[0].value,
                number: e.target[1].value,
                password: e.target[2].value
            }

            const url = 'http://localhost:3000/user/onboard/register';
            const response = await axios.post(url, data);

            if (response.data.messege === 'success') {
                localStorage.setItem('token', response.data.token);
                navigate(-2);
                setIsAuth(true);
                setPopup({
                    text: 'Signup success, Welcome!',
                    messege: 'success'
                });
            } else if (response.data.messege === 'number-already-registered') {
                setPopup({
                    text: response.data.messege,
                    messege: 'fail'
                });
            }

            NProgress.done();
        } catch (error) {
            setPopup({
                text: 'internal-server-error',
                messege: 'fail'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="w-[340px] border h-[400px] border-amber-700 border-opacity-30 m-5 flex flex-col shadow-lg shadow-gray-200 rounded-md">
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="mt-25"></div>
                        <div className="flex flex-col gap-4 mt-10">
                            <h1 className="text-center text-3xl ml-4 font-bold text-amber-900">Sign up</h1>
                            <div className="m-auto">
                                <input
                                    type="text"
                                    name='name'
                                    className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                                    required
                                    placeholder="Name"
                                />
                            </div>
                            <div className="m-auto">
                                <input
                                    type="text"
                                    minLength='10'
                                    maxLength='10'
                                    name='number'
                                    value={contactNumber}
                                    onChange={setToNumber}
                                    className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4 placeholder:text-amber-900 placeholder:text-opacity-50"
                                    required
                                    placeholder="Contact"
                                />
                            </div>
                            <div className="m-auto">
                                <input
                                    type="password"
                                    minLength='8'
                                    name='password'
                                    className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50"
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div className="m-auto">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-72 h-10 text-gray-800 font-medium text-center content-center bg-amber-200 rounded-md pl-2 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-400'}`}
                                >
                                    {isLoading ? 'Signing up...' : 'Sign up'}
                                </button>
                            </div>
                            <div className='m-auto'>
                                <p>Already have an account? <Link to='/login' className='text-amber-900 underline'>Log-in</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
