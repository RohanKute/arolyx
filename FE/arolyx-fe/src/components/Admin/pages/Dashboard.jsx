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
              ? "m-2 w-48 bg-gray-700 text-white font-medium  py-2 px-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out"
              : "m-2 w-48  bg-amber-200 hover:bg-amber-300 text-gray-900  font-medium py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out"
          }
        >
          <div className="flex  justify-center">
            <svg className="mr-2 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create New
          </div>

        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "m-2 w-48 bg-gray-700 text-white font-medium  py-2 px-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out"
              : "m-2 w-48  bg-amber-200 hover:bg-amber-300 text-gray-900  font-medium py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out"
          }
        >
          <div className="flex  justify-center">
            <svg className="mr-2 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
            </svg>
            See All Products

          </div>
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "m-2 w-48 bg-gray-700 text-white font-medium  py-2 px-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out"
              : "m-2 w-48  bg-amber-200 hover:bg-amber-300 text-gray-900  font-medium py-2 px-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out"
          }
        >
          <div className="flex justify-center">
            <svg className="mr-2  size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            See Users
          </div>
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
