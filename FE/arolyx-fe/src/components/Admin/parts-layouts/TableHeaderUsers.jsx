

export default function TableHeadersUsers(){
    return (
        <>
            <div className="flex  border  shadow-sm m-0.5 bg-gray-50 h-14 ">
                <div className="w-24 h-14 flex justify-center items-center border-r">
                    <p className="text-center font-semibold text-gray-600 text-lg">Sr.No</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center  w-64 ">
                    <p className="text-center text-lg font-semibold text-gray-600 ">Name</p>
                </div>

                <div className="flex m-1  items-center justify-center w-64">
                    <p className="text-center font-semibold text-gray-600 text-lg">Contact</p>
                </div>
             </div>
            </>
            )
}