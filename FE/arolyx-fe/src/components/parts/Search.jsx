export default function Search() {
    return (
        <>
            <div className="flex ">
                <input
                    className="min-w-40 sm:min-w-48 max-w-48 focus:outline-none border-b border-stone-800 p-1 hover:border-b-2 focus:border-b-2"
                    placeholder="search"
                    type="text"
                />
                <button className="hover:cursor-pointer m-0 p-1 ">
                    <svg
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
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}
