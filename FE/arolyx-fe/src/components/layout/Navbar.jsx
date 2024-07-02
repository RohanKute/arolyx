import { useState } from 'react';
import img from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const [isLinesClicked, setIsLineClicked] = useState(false);

    const handleLinesClicked = () => {
        setIsLineClicked(true);
    }

    const handleXClicked = () => {
        setIsLineClicked(false);
    }

    return (
        <nav>
            <div>
                {/*navbar-above-md-screens*/}
                <div className="hidden md:flex h-14 justify-around items-center border-b border-gray-200 bg-white">
                    <div>
                        <img className='h-14' src={img} alt="arolyx-logo" />
                    </div>
                    <div className="hidden md:flex justify-around text-black-700 text-l font-semibold">
                        <div >
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
                        <div >
                            <NavLink
                                to='/signup'
                                className={({ isActive }) =>
                                    isActive ? 'mx-3 underline underline-offset-8 decoration-amber-900 p-2' : 'mx-3 p-2 hover:bg-yellow-200 hover:rounded-md'
                                }
                            >
                                Signup(Get updates!)
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="hidden md:block hover:bg-yellow-200 hover:rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                        <div className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar-small-screens*/}
            <div>
                <div className="md:hidden block bg-white justify-around items-center border-b border-gray-200">
                    <div className='flex justify-between items-center'>
                        <img className='h-14 mx-2' src={img} alt="arolyx-logo" />
                        <div className="md:hidden mx-4">
                            {isLinesClicked ? (
                                <button onClick={handleXClicked} className='hover:bg-yellow-200 hover:rounded-full p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            ) : (
                                <button onClick={handleLinesClicked} className='hover:bg-yellow-200 hover:rounded-full p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                    {isLinesClicked &&
                        <div className='bg-white'>
                            <div className="text-black-700 text-l font-semibold">
                                <div className='my-3 mx-5'>
                                    <NavLink
                                        to='/products'
                                        className={({ isActive }) =>
                                            isActive ? ' underline underline-offset-4 decoration-amber-900  p-2' : ' hover:bg-yellow-200 hover:rounded-md p-2'
                                        }>
                                        Products

                                    </NavLink>
                                </div>
                                <div className='my-3 mx-5 '>
                                    <NavLink
                                        to='/about'
                                        className={({ isActive }) =>
                                            isActive ? 'underline underline-offset-4 decoration-amber-900   p-2' : ' hover:bg-yellow-200 hover:rounded-md  p-2'
                                        }>
                                        About
                                    </NavLink>
                                </div>
                                <div className='my-3 mx-5'> 
                                    <NavLink
                                        to='/signup'
                                        className={({ isActive }) =>
                                            isActive ? 'underline underline-offset-4 decoration-amber-900 p-2 ' : ' hover:bg-yellow-200 hover:rounded-md p-2'
                                        }>
                                        Signup(Get updates!)

                                    </NavLink>
                                </div>

                            </div>
                            <div className="my-4 mx-5 p-2 hover:bg-yellow-200 hover:rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}
