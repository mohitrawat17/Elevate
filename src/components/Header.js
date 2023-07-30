import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg" style={{fontFamily: 'Kanit',fontFamily: 'sans-serif'}}>

      {/* title */}
      <Link to="/" className="w-full">
      <div className="ml-10 flex justify-start items-center">
      <img className="w-6 h-6" src={logo}></img>
        <h1 className="pl-2 text-orange-500 py-4 font-bold text-3xl sm:text-xl sm:font-semibold sm:py-3">Elevate Your Lifestyle</h1>
      </div>
      </Link>

      {/* nav item for small screen */}
      <div className="flex flex-col sm:flex-row justify-end ml-2 w-full">
        {/* Hamburger menu icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <CloseIcon />
            ) : (
              <MenuIcon/>
            )}
          </button>
        </div>

        {/* Nav items */}
        <ul className={` flex flex-col sm:flex-row font-semibold ${showMenu ? "flex" : "hidden"} sm:flex`}>
        <Link to="/" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-12">  <li>
            Home
          </li>
          </Link>

          <Link to="/contact" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-12">
          <li>
            Contact
          </li>
          </Link>
          <Link to="/about" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-12">
          <li>
            About us
          </li>
          </Link>
          <Link to="/deals" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-12">
          <li>
            Today's Deals
          </li>
          </Link>
          <Link to="/help" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-12">
          
          <li>
            Help
          </li>
          </Link>
        </ul>
      </div>

      {/* features in header */}
      <div className="flex justify-end w-5/6 my-5 mr-4 sm:mr-0 ">
        {/* drop-down language */}
        <select className=" rounded-md outline-none cursor-pointer mr-2 sm:mr-9">
          <option value="">English</option>
          <option value="option1">Hindi</option>
          <option value="option2">French</option>
          <option value="option3">Japanese</option>
        </select>

        {/* cart */}
        <Link to="/cart">
        <div className="flex  cursor-pointer hover:text-orange-400">
          <ShoppingCartIcon />
          <div className="text-xs sm:text-base ml-1">Cart</div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
