import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "./../utils/constants";
// import { CartButtons } from "./CartButtons";

export const Navbar = () => {
  return (
    <section className="h-20 flex items-center justify-center">
      <div className="w-[90vw] my-0 mx-auto max-w-max md:grid md:grid-cols-3 md:items-center lg:grid lg:grid-cols-3 lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="comfy sloth" className="w-44 ml-[-15px]" />
          </Link>
          <button
            type="button"
            className="bg-transparent border-transparent text-primary-5 cursor-pointer md:hidden lg:hidden"
          >
            <FaBars className="text-3xl" />
          </button>
        </div>

        <ul className="hidden lg:flex lg:justify-center">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="my-0 mx-2">
                <Link
                  className="lg:text-grey-3 lg:text-base lg:capitalize lg:tracking-widest lg:p-2 lg:hover:border-b-2 lg:hover:border-b-primary-7"
                  to={url}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <CartButtons /> */}
      </div>
    </section>
  );
};
