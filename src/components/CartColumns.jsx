export const CartColumns = () => {
  return (
    <div className="hidden md:block lg:block">
      <div className="content grid grid-cols-for-cart-item items-center gap-4">
        <h5 className="text-grey-5 font-normal text-center">item</h5>
        <h5 className="text-grey-5 font-normal">price</h5>
        <h5 className="text-grey-5 font-normal">quantity</h5>
        <h5 className="text-grey-5 font-normal">subtotal</h5>
        <span className="w-8 h-8"></span>
      </div>
      <hr className="mt-4 mb-12" />
    </div>
  );
};
