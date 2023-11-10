import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

export const Hero = () => {
  return (
    <section className="section-center min-h-[60vh] grid place-items-center lg:h-[calc(100vh-5rem)] lg:grid-cols-2 gap-32">
      <article>
        <h1 className="lg:mb-8">
          design your <br />
          comfort zone
        </h1>
        <p className="leading-8 max-w-[45em] mb-8 text-grey-5 text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio
        </p>
        <Link to="/products" className="btn lg:py-3 lg:px-6 lg:text-base">
          shop now
        </Link>
      </article>

      <article className="hidden lg:block lg:relative lg:before:absolute lg:before:w-[10%] lg:before:h-4/5 lg:before:bg-primary-9 lg:before:bottom-[0%] lg:before:left-[-8%] radius">
        <img
          src={heroBcg}
          alt="nice table"
          className="lg:w-full lg:h-[550px] lg:relative lg:radius lg:block lg:object-cover"
        />
        <img
          src={heroBcg2}
          alt="person working"
          className="lg:absolute lg:bottom-0 lg:left-0 lg:w-[250px] lg:translate-x-[-50%] lg:radius"
        />
      </article>
    </section>
  );
};
