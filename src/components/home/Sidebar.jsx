import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";
import { setSidebarClose } from "../../features/products/productSlice";
import { CartButtons } from "../cart/CartButtons";

export const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleSidebarClose = () => {
    dispatch(setSidebarClose());
  };

  return (
    <div
      className={` text-center fixed top-0 left-0 w-full h-full bg-white -z-[1] lg:hidden transition-default transform -translate-x-full ${
        isSidebarOpen ? "transform-none z-[999]" : ""
      }`}
    >
      <aside className={`sidebar show-sidebar`}>
        <div className="sidebar-header flex justify-between items-center py-4 px-6">
          <img
            src={logo}
            alt="comfy sloth"
            className="logo justify-self-center	h-11 -ml-3"
          />
          <button
            className="close-btn text-3xl bg-transparent border-transparent text-red-dark transition-default cursor-pointer mt-1 hover:text-red-light"
            type="button"
            onClick={handleSidebarClose}
          >
            <FaTimes />
          </button>
        </div>

        <ul className="links mb-8">
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link
                to={url}
                className="block text-left text-base capitalize py-4 px-6 text-grey-3 transition-default tracking-widest hover:py-4 hover:px-8 hover:bg-grey-10 hover:text-grey-2"
                onClick={handleSidebarClose}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <CartButtons style="my-8 mx-auto grid grid-cols-2 w-[180px]" />
      </aside>
    </div>
  );
};
