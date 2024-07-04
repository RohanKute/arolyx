import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import checkIfNumberAndSet from '../../utils/checkIfNumberAndSet';
export default function Signup() {
    const [contachNumber, setContactNumber] = useState('');

    
    // const checkIfNumberAndSet = (e) => {
    //     e.preventDefault();
    //     const value = e.target.value.trim(); 
    //     if (!isNaN(value) && value !== '') {
    //         setContactNumber(parseInt(value));
    //     } else{
    //          setContactNumber('')
    //     }
    // };

    const setToNumber = (e) =>{
         checkIfNumberAndSet(e,setContactNumber)
    }

    const handleOnSubmit = async(e)=>{
          try {
                e.preventDefault();
                const data = {
                    name : e.target[0].value,
                    number : e.target[1].value,
                    password : e.target[2].value
                }
                const url = 'http://localhost:3000/user/onboard/register';
                const response = await axios.post(url, data);
                if(response.data.messege == 'success'){
                    localStorage.setItem('token' , response.data.token);
                    history.go(-2)
                    alert('login-success')
                } else if(response.data.messege == 'number-already-registred'){
                    alert(response.data.messege)
                }
          } catch (error) {
              alert(error)
          }
    }
    return (
        <>
            <div className="w-[340px] border h-[400px] border-amber-700   border-opacity-30  m-5 flex flex-col  shadow-lg shadow-gray-200 rounded-md">
                <div >
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="mt-25">
                        </div>
                        <div className="flex flex-col gap-4 mt-10">
                            <h1 className="text-center text-3xl ml-4 font-bold text-amber-900">Sign up</h1>
                            <div className="m-auto" >
                                <input type="text" name='name' className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4  placeholder:text-amber-900 placeholder:text-opacity-50" required placeholder="Name" />
                            </div>
                            <div className="m-auto" >
                                <input type="text" minLength='10' maxlength='10' name='number'  value={contachNumber} onChange={setToNumber} max={10} className="w-72 h-10 border border-amber-900 focus:border-2 outline-none rounded-md px-4  placeholder:text-amber-900 placeholder:text-opacity-50"  required placeholder="Contact" />
                            </div>
                            <div className="m-auto">
                                <input type="password" minLength='8' name='password'  className="w-72 h-10 border border-amber-900 focus:border-2 outline-none   rounded-md px-4 outline-1 placeholder:text-amber-900 placeholder:text-opacity-50" required placeholder="Password" />

                            </div>
                            <div className="m-auto">
                                <button className="w-72 h-10 text-gray-800 font-medium text-center content-center bg-amber-200  hover:bg-amber-400 transition duration-300  rounded-md pl-2 ">Sign up</button>
                            </div>
                            <div className='m-auto'>
                                <p>Already have an account? <Link to='/login' className='text-amber-900 underline'>Log-in</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}