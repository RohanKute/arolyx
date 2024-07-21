export default function TableHeader() {
    return (
        <>
            <div className="flex  border bg-gray-50  shadow-sm m-0.5 h-14 ">
                <div className="w-24 h-14 flex justify-center items-center border-r">
                    <p className="text-center font-semibold text-gray-600 text-base">Image</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-44">
                <p className="text-center text-base font-semibold text-gray-600 ">Name</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-96">
                <p className="text-center font-semibold text-gray-600 text-base">Description</p>
                </div>

                <div className="flex m-1 border-r items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-base">Price</p>
                </div>

                <div className="flex m-1 border-r  items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-base">Stock</p>
                </div>

        
                <div className="flex m-1 border-r items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-base">Visible</p>
                </div>
                      
                <div className="flex m-1 border-r items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-base">Type</p>
                </div>
                
                <div className="flex m-1 border-r items-center justify-center w-24">
                <p className="text-center font-semibold text-gray-600 text-base">Discount(%)</p>
                </div>
                <div className="flex m-1   items-center justify-center w-48">
                <p className="text-center font-semibold text-gray-600 text-base">Action</p>
                </div>
            </div>
        </>
    )
}