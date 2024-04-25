import { services } from "../utils/constants.jsx";

export const Services = () => {
  return (
    <section className="py-20 px-0 bg-primary-10 lg:p-0">
      <div className="section-center lg:translate-y-20">
        <article className="header lg:grid lg:grid-cols-2">
          <h3 className="text-primary-1 mb-8">
            custom furniture <br /> build only for you
          </h3>
          <p className="mb-0 leading-[1.8] text-primary-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys
          </p>
        </article>

        <div className="services-center mt-16 lg:mt-0 grid grid-cols-for-service gap-10 lg:grid-cols-for-service md:grid  lg:translate-y-20">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                key={id}
                className="service bg-primary-7 text-center py-10 px-8 radius"
              >
                <span className="icon w-16 h-16 grid my-0 mx-auto place-items-center mb-4 rounded-full bg-primary-10 text-primary-1">
                  {icon}
                </span>
                <h4 className="text-primary-1">{title}</h4>
                <p className="mb-0 leading-[1.8] text-primary-2">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
