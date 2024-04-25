export const Footer = () => {
  return (
    <section className="h-20 flex flex-col justify-center items-center bg-black text-center md:flex-row">
      <h5 className="text-white m-1 font-normal transform-none leading-tight">
        &copy; {new Date().getFullYear()}
        <span className="text-primary-5">ComfySloth</span>
      </h5>
      <h5 className="text-white m-1 font-normal transform-none leading-tight">
        All rights reserved
      </h5>
    </section>
  );
};
