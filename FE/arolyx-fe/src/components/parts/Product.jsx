import { useEffect, useState } from "react"

export default function Product() {

   const [img , setImd] = useState("");

   // useEffect(()=>{
   //     const getImage = await 
   // })
   return (
      <>
         <div className="max-w-64 min-w-64 bg-white  border border-gray-300 min-h-96 m-3 flex flex-col justify-stretch ">
            <div className="max-h-72 flex">
               <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="flex flex-col  justify-between">
               <div>
                  <p className=" text-slate-700 ml-2 xs">Short Description here.</p>
               </div>
               <div>
                  <p className=" font-medium text-black ml-2">&#8377; 300</p>
               </div>
               <div className="ml-1 border mt-2 border-gray-800 p-1 rounded max-w-28 text-center hover:border-2">
                    <a href="/"className="">
                         Details
                    </a>
               </div>
            </div>
         </div>
      </>
   )
}