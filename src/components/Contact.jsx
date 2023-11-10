export const Contact = () => {
  return (
    <section className="py-20 px-0 lg:py-60 lg:px-0">
      <div className="section-center">
        <h3 className="transform-none">Join our newslatter and get 20% off</h3>
        <div className="content md:items-center md:mt-8 lg:grid lg:grid-cols-2 lg:gap-32">
          <p className="leading-loose max-w-[45em] text-grey-5 md:mb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
          </p>

          <form
            className="contact-form mt-7 lg:mt-0 w-[90vw]  max-w-[500px]"
            style={{ display: "grid", gridTemplateColumns: "1fr auto" }}
          >
            <input
              type="email"
              className="form-input text-base py-2 px-4 border-2 border-black border-r-0 text-grey-3 rounded-[0.25rem] placeholder:text-black placeholder:capitalize"
              placeholder="enter email"
            />
            <button
              type="submit"
              className="submit-btn text-base py-2 px-4 border-2 border-black rounded-[0.25rem] bg-primary-5 capitalize leading-normal cursor-pointer transition-default text-black hover:text-white"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
