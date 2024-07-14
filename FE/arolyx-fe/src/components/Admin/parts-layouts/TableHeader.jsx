export default function TableHeader() {
    return (
        <>
            <div className="flex  border  shadow-sm m-0.5 h-14 ">
                <div className="w-24 h-14 flex justify-center items-center border-r">
                    <p className="text-center font-semibold text-gray-600 text-lg">Image</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-44">
                <p className="text-center text-lg font-semibold text-gray-600 ">Name</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-96">
                <p className="text-center font-semibold text-gray-600 text-lg">Description</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-lg">Price</p>
                </div>


                <div className="flex m-1 border-r  items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-lg">Stock</p>
                </div>

        
                <div className="flex m-1 border-r items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-lg">Visible</p>
                </div>

        
                <div className="flex m-1   items-center justify-center w-48">
                <p className="text-center font-semibold text-gray-600 text-lg">Action</p>
                </div>
            </div>
        </>
    )
}