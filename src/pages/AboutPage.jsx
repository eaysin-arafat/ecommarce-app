import { PageHero } from "../components/PageHero";
import aboutImg from "../assets/hero-bcg.jpeg";

export const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />

      <section className=" section section-center grid gap-16 lg:grid lg:grid-cols-2">
        <img
          src={aboutImg}
          alt="nice desk"
          className="w-full block radius h-[500px] object-cover"
        />

        <article>
          <div className="title">
            <h2 className="text-left font-bold">our story</h2>
            <div className="underline !ml-0"></div>

            <p className="leading-loose max-w-[45em] my-0 mx-auto mt-8 text-grey-5 text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
