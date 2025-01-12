import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { logout } from '.././Pages/Redux/AuthSlice';  // Ensure this is correctly imported

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggleMenu = () => setIsopen(!isOpen);

   return (
    <nav className="sticky top-0 w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white z-10">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center border-b-2">
        <div className="font-bold">Ingpo Merapi</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-start md:w-auto`}>
          <ul className="pt-4 text-gray-700 md:flex md:justify-between md:pt-0">
            <li className="md:p-4 py-2 block hover:text-blue-400">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="md:p-4 py-2 block hover:text-blue-400">
              <Link to={'/login'}>Login</Link>
            </li>
            <li className="md:p-4 py-2 block hover:text-blue-400">
              <Link to={'/register'}>Register</Link>
            </li>
              <li className="md:p-4 py-2 block hover:text-blue-400">
                <Link to={'/admin'}>Admin Dashboard</Link>
              </li>
   
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
