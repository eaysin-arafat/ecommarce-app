/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setSidebarClose,
  setCartTotals,
  setClearCartItem,
} from "../features/products/productSlice";
import { useEffect, useRef, useState, forwardRef } from "react";
import { IoLogOutSharp } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import { DropDownLoggedOut } from "./DropDownLoggedOut";

export const CartButtons = ({ style }) => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const { total_items, cart } = useSelector((state) => state.product);
  const myUser = false;
  const menuRef = useRef();
  const toggleRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== toggleRef.current) {
      setDropDown(false);
    }
  });

  useEffect(() => {
    dispatch(setCartTotals());
    localStorage.setItem("cart", JSON.stringify(cart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const closeSidebar = () => {
    dispatch(setSidebarClose());
  };

  const clearCartButtons = () => {
    dispatch(setClearCartItem());
  };

  return (
    <div className={`${style}`}>
      <Link
        to="/cart"
        className="cart-btn text-grey-1 text-lg font-semibold leading-loose flex items-center"
        onClick={closeSidebar}
      >
        Cart
        <span className="cart-container flex items-center relative">
          <FaShoppingCart className="h-[1.6rem] ml-[5px]" />
          <span className="cart-value absolute -top-[10px] -right-4 bg-primary-5 w-4 h-4 flex items-center justify-center rounded-full text-xs text-white p-3">
            {total_items}
          </span>
        </span>
      </Link>

      {/* {myUser ? (
        <button
          type="button"
          className="auth-btn flex items-center bg-transparent border-transparent cursor-pointer text-grey-1 leading-loose text-lg font-semibold"
          onClick={clearCartButtons}
        >
          Logout <FaUserMinus className="ml-[5px]" />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose"
        >
          Login <FaUserPlus className="ml-[5px]" />
        </button>
      )} */}

      {myUser ? (
        <button
          className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose font-semibold"
          onClick={clearCartButtons}
        >
          Logout <IoLogOutSharp size="30px" className="ml-[5px]" />
        </button>
      ) : (
        <button
          className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose font-semibold relative"
          onClick={() => setDropDown(!dropDown)}
          ref={menuRef}
        >
          Singup <MdPersonAddAlt1 size="26px" className="ml-[5px]" />
          {/* toggle register and sighout */}
          {dropDown && (
            <DropDownLoggedOut ref={toggleRef} setDropDown={setDropDown} />
          )}
        </button>
      )}
    </div>
  );
};
