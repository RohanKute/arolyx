export default function SingleUser({user, index}){
     return(
        <>
        <div className="flex hover:bg-gray-50 bg-white shadow-sm border-r border-b m-0.5 h-14 ">
                <div className="w-24 flex justify-center items-center border-r  border-l">
                <p className="text-center text-gray-700 font-semibold text-base">{index+1}</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-64">
                    <p className="text-center text-gray-700 font-semibold text-base">{user.name}</p>
                </div>


                <div className="flex m-1  items-center justify-center w-64">
                    <p className="text-center text-gray-700 font-semibold text-base">{user.number}</p>
                </div>

            </div>
        </>
     )
}