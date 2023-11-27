/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/helpers";
import { useEffect } from "react";
import { setClearCartItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { setSubmitOrders } from "../features/cart/cartApiSlice";
import { getUser } from "../features/user/userApiSlice";

export const Checkout = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { cart, order_state, total_amount, shipping_fee } = useSelector(
    (state) => state.cart
  );

  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  const { user } = useSelector((state) => state.user);
  console.log(`${import.meta.env.VITE_BASE_USERS_URL}/${cbid}`);

  const dispatch = useDispatch();
  const navigage = useNavigate();
  // const [user, setUser] = useState({});

  // const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    dispatch(getUser());
  }, [token]);

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    const order = {
      cartList: cart,
      amount_paid: total_amount + shipping_fee,
      quantity: cart.length,
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
    };

    dispatch(setSubmitOrders(order));
    dispatch(setClearCartItem());

    order_state ? navigage("/order-summary") : navigage("/order-summary");
  };

  return (
    <div className="h-[72vh] w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-6">Payment Information</h2>
        <form onSubmit={handleOrderSubmit}>
          <div className="col-span-2 mb-6 sm:col-span-1">
            <label
              htmlFor="card-number"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              readOnly
              defaultValue={user.email || ""}
              className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                name="card-number"
                id="card-number"
                defaultValue="2222 5453 5054 0083"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expiration Date
              </label>
              <input
                type="text"
                name="expiration-date"
                defaultValue="25. 2023"
                id="expiration-date"
                placeholder="MM / YY"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                placeholder="000"
                defaultValue=" "
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-holder"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Holder
              </label>
              <input
                type="text"
                name="card-holder"
                id="card-holder"
                defaultValue={user.name || " "}
                readOnly
                // placeholder="Full Name"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="text-lg col-span-2 sm:col-span-1 capitalize font-semibold">
              total:{" "}
              <span className="!price text-primary-5 font-bold lg:text-xl">
                {formatPrice(total_amount + shipping_fee)}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="btn w-full hover:bg-blue-600 text-white font-medium !py-3 !rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
