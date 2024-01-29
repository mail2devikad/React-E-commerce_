import React, { useContext, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-black text-white flex justify-between py-5 px-10 ">
      <div>
        <nav class="flex justify-center space-x-4">
          <Link
            to="/"
            className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Home
          </Link>
          <Link className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Categories
          </Link>
          <Link className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">
            About
          </Link>
        </nav>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="flex">
        <BsBag className="text-2xl" />
        <div className="bg-red-500 rounded-full text-white w-5 h-5 text-center">
          {itemAmount}
        </div>
      </div>
    </header>
  );
};

export default Header;
