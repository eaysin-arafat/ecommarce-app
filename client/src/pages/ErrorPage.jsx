import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export const ErrorPage = () => {
  useTitle(`Error 404 - Comfy Store`);

  return (
    <main className="page-100 bg-primary-10 flex justify-center items-center h-[91vh]">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-[10rem] font-bold">404</h1>
        <h3 className="transform-none mb-8 font-semibold">
          Sorry, the page you tried cannot be found
        </h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </main>
  );
};
