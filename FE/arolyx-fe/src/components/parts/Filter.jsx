import { useState } from "react";

export default function Filter() {
    const [dropDown, setDropDown] = useState(false);

    function openDropDown() {
        setDropDown(!dropDown);
    }

    return (
        <>
            <div className="border border-black p-1 hover:border-2 min-w-40 sm:min-w-48 max-w-48">
                <button className="flex justify-between w-full" onClick={openDropDown}>
                    <div>
                        <p className="text-base mr-2">Filter</p>
                    </div>
                    <div>
                        {!dropDown && <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                            />
                        </svg>}
                        {dropDown && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>}

                    </div>
                </button>
            </div>
            {dropDown && <div className="mt-2 block w-full">
                <div className="flex justify-start">
                    <input className="mx-2 mt-1 w-4 h-4 accent-black" type="checkbox" id="item1" />
                    <label className="mx-1  text-m" htmlFor="item1">Abc</label>
                </div>
                <div className="flex justify-start">
                    <input className="mx-2 mt-1 w-4 h-4 accent-black" type="checkbox" id="item2" />
                    <label className="mx-1  text-m" htmlFor="item2">Abc</label>
                </div>
            </div>}
        </>
    );
}
