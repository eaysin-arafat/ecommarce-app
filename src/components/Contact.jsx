export const Contact = () => {
  return (
    <section className="py-20 px-0 lg:py-60 lg:-mb-30 lg:px-0">
      <div className="section-center text-center">
        <h3 className="transform-none">Join our newslatter and get 20% off</h3>
        <div className="content flex flex-col md:flex md:flex-col md:items-center md:mt-8 ">
          <p className="leading-loose max-w-[45em] text-grey-5 md:mb-0 md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
          </p>

          <form className="flex items-center justify-center mt-16 w-[100vw] max-w-[500px]">
            <input
              type="email"
              className="w-[300px] form-input text-base py-2 px-4 border-2 border-black border-r-0 text-grey-3 rounded-[0.25rem] placeholder:text-black placeholder:capitalize"
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
