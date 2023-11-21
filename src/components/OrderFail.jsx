import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

export const OrderFail = () => {
  return (
    <div className="mt-20">
      <div className="bg-white p-6  md:mx-auto">
        <MdError className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed!, Please try again
          </h3>
          <p className="text-gray-600 my-2">Your order is not confirmed</p>
          <p>
            Connect <b className="cursor-pointer">comfysupport@gamil.com</b> for
            support
          </p>
          <div className="py-6 text-center">
            <Link
              href="#"
              className="btn !px-12 hover:bg-indigo-500 text-white font-semibold !py-3"
            >
              Check Cart Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
