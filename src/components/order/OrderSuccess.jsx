/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

export const OrderSuccess = () => {
  const { user } = useSelector((state) => state.user);
  useTitle(`Order Success`);

  return (
    <div className="bg-gray-100 mt-24">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-dark w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            ID: 5fg4sfg4sdfg4 Payment Done!
          </h3>
          <p className="text-gray-600 my-2 text-base lg:text-lg">
            Thank you <b className="capitalize">{user.name}</b> for completing
            your secure online payment.
          </p>

          <p className=" text-base lg:text-lg">
            Please check your mail. <b>eaysin.arafat.j@gmail.com.</b> Have a
            great day!
          </p>

          <div className="py-5text-center">
            <Link
              to="/"
              className="btn !px-12 hover:bg-indigo-500 text-white !font-semibold !py-3"
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
