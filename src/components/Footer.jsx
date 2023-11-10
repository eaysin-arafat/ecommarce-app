export const Footer = () => {
  return (
    <section className="h-20 flex flex-col justify-center bg-black text-center">
      <h5 className="text-white m-[0.1rem] font-semibold normal-case leading-tight">
        &copy; {new Date().getFullYear()}
        <span className="text-primary-5">ComfySloth</span>
      </h5>
    </section>
  );
};
