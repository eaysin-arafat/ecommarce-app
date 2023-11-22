/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSidebarClose } from "../features/products/productSlice";
import { setCartTotals, setClearCartItem } from "../features/cart/cartSlice";
import { useEffect, useRef, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { DropDownLogIn } from "./DropDownLogIn";

export const CartButtons = ({ style }) => {
  const [dropDown, setDropDown] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const dispatch = useDispatch();
  const { total_items, cart } = useSelector((state) => state.cart);
  const { user, status } = useSelector((state) => state.auth);
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

  useEffect(() => {
    status ? setToggleBtn(true) : setToggleBtn(false);
  }, [status]);

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

      {toggleBtn ? (
        <div>
          <button
            className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose font-semibold relative"
            onClick={() => {
              setDropDown(!dropDown);
            }}
            ref={menuRef}
          >
            {user.name || "Eaysin"}
            <IoMdPerson size="30px" className="ml-[5px]" />
            {/* toggle logout */}
            {dropDown && (
              <DropDownLogIn
                ref={toggleRef}
                clearCartButtons={clearCartButtons}
                setDropDown={setDropDown}
              />
            )}
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose font-semibold relative"
        >
          Singup <MdPersonAddAlt1 size="26px" className="ml-[5px]" />
        </Link>
      )}
    </div>
  );
};
