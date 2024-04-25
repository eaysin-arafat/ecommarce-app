import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "./../utils/constants";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../features/products/productSlice";
import { CartButtons } from "./CartButtons";

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(setSidebarOpen());
  };
  // const token = JSON.parse(sessionStorage.getItem("token"));

  return (
    <section className="h-20 flex items-center justify-center">
      <div className="nav-center w-[90vw] my-0 mx-auto md:mx-10 lg:max-width lg:grid lg:grid-cols-for-nav lg:items-center">
        <div className="nav-header flex items-center justify-between gap-32">
          <Link to="/">
            <img src={logo} alt="comfy sloth" className="w-44 -ml-[15px]" />
          </Link>
          <button
            type="button"
            className="nav-toggle bg-transparent border-transparent text-primary-5 cursor-pointer lg:hidden"
            onClick={handleOpenSidebar}
          >
            <FaBars className="text-3xl" />
          </button>
        </div>

        <ul className="nav-links hidden lg:flex lg:justify-center">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="lg:my-0 lg:mx-2">
                <Link
                  className="lg:text-grey-3 lg:text-base lg:capitalize lg:leading-loose lg:p-2 hover:border-b-2 border-primary-7"
                  to={url}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          {/* {token && ( */}
          <li>
            <Link
              to="/checkout"
              className="lg:text-grey-3 lg:text-base lg:capitalize lg:leading-loose lg:p-2 hover:border-b-2 border-primary-7"
            >
              checkout
            </Link>
          </li>
          {/* // )} */}
        </ul>
        <CartButtons style="hidden lg:flex items-center justify-center gap-8 w-[225px]" />
      </div>
    </section>
  );
};
