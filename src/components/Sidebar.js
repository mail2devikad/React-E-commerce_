import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  console.log({ itemAmount });

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} 
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div>
          <div>
            <span>Total : </span>${parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="py-4 bg-black text-white flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
          <div className="py-3 bg-slate-800 text-white flex justify-center items-center text-xl mt-5">
            <button>BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
