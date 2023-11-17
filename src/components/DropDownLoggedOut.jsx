/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoLogInSharp, IoPersonAdd } from "react-icons/io5";

export const DropDownLoggedOut = ({ setDropDown }) => {
  return (
    <div className="absolute top-9 -left-2 bg-white p-2 rounded-sm z-50">
      <ul className="flex flex-col items-start justify-center">
        <li>
          <Link
            to="/login"
            className="flex items-center gap-1"
            onClick={() => setDropDown(false)}
          >
            Login <IoLogInSharp size="23px" className="ml-[5px]" />
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="flex items-center gap-1"
            onClick={() => setDropDown(false)}
          >
            Register <IoPersonAdd ize="23px" className="ml-[5px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
