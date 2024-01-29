import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  //destructure items
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 border-b border-gray-200 w-full ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`} className="text-sm hover:underline">
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)}>
              <IoMdClose className="text-gray-500 hover:text-red-500 " />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm ">
            <div className="flex flex-1 max-w-[100px] items-center h-full border ">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around text-gray-400">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
