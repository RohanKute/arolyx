import { Link, NavLink } from "react-router-dom";

export default function NavButtons() {
    <>
        <div className="flex-col flex md:flex-row items-center md:justify-start w-full  px-4 border-b-2">
            <NavLink to="/admin/create-product" className="m-2 w-48 bg-amber-200 hover:bg-amber-300 text-black font-semibold py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out">
                Create New Product
            </NavLink>
            <NavLink to="/products" className="m-2 w-48 bg-amber-200 hover:bg-amber-300 text-black font-semibold py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out">
                See All Products
            </NavLink>
            <NavLink to="/users" className="m-2  w-48 bg-amber-200 hover:bg-amber-300 text-black font-semibold py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out">
                See Users
            </NavLink>
        </div>
    </>
}