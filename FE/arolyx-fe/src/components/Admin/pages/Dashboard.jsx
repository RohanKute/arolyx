import { Routes, Route, NavLink } from "react-router-dom";
import CreateProduct from "../parts-layouts/CreateProduct";
import { useAdminAuth } from "../../../context/admin-context/adminAuthContext";
import Products from "../parts-layouts/Products";
import Users from "../parts-layouts/Users";

export default function Dashboard() {
  const { isAdminAuth } = useAdminAuth();

  if (!isAdminAuth) {
    return <div>Please login to access the admin dashboard.</div>;
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col bg-amber-50 p-4 md:flex-row items-center md:justify-start w-full px-4 border-b border-black">
        <NavLink
          to="/admin/create-product"
          className={({ isActive }) =>
            isActive
              ? "m-2 w-48 bg-amber-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out"
              : "m-2 w-48 bg-amber-200 hover:bg-amber-300 text-black font-semibold py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out"
          }
        >
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create New
          </div>
        
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "m-2 w-48 bg-amber-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out"
              : "m-2 w-48 bg-amber-200 hover:bg-amber-300 text-black font-semibold py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out"
          }
        >
          See All Products
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "m-2 w-48 bg-amber-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out"
              : "m-2 w-48 bg-amber-200 hover:bg-amber-300 text-black font-semibold py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out"
          }
        >
          See Users
        </NavLink>
      </div>
      <div className="flex justify-center p-4">
        <Routes>
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}
