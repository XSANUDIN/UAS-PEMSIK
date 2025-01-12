import { useDispatch } from "react-redux";
import { logout } from "../Pages/Redux/AuthSlice"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <>
      <aside className="h-screen w-72">
        <nav className="flex flex-col justify-between h-full p-5 border-r bg-gray-50">
          <div>
            <a
              href="#"
              className="flex items-center p-3 rounded-xl hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
              </svg>
              <span className="text-gray-900">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-xl hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
              </svg>
              <span className="text-gray-900">Dashboard</span>
            </a>
            {/* Other navigation items */}
          </div>

          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="w-full text-white bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
