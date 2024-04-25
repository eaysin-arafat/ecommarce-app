import { Contact, FeaturedProducts, Hero, Services } from "../components";
import useTitle from "../hooks/useTitle";

export const HomePage = () => {
  useTitle(`Design Your Comfort Zone`);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};
