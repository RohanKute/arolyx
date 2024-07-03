import { Link } from 'react-router-dom'
import img from '../../assets/logo.png'
export default function Login() {
    return (
        <>
            <div className="w-[340px] border h-[400px] border-amber-900   border-opacity-30  m-5 flex flex-col  shadow-lg shadow-gray-200 rounded-md">
                <div >
                    <form action="">
                        <div className="mt-25">
                        </div>
                        <div className="flex flex-col gap-4 mt-24">
                            <h1 className="text-center text-3xl ml-4 font-bold text-amber-900">Log in</h1>
                            <div className="m-auto" >
                                <input type="phone" className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4  placeholder:text-amber-900 placeholder:text-opacity-50" placeholder="Contact" />
                            </div>
                            <div className="m-auto">
                                <input type="password" className="w-72 h-10 border border-amber-900 focus:border-2 outline-none   rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50" placeholder="Password" />

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