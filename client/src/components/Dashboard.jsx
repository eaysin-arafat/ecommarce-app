import { formatPrice } from "../utils/helpers";

/* eslint-disable react/prop-types */
export const Dashboard = ({ order }) => {
  return (
    <main className="section section-center border border-grey-6 rounded-sm !p-5">
      <div className="flex items-center justify-between w-full">
        <p className="font-semibold">Order Id: 54fsad4f54sf</p>
        <p className="font-semibold ">
          Total Price:
          <span className="text-primary-4">
            {formatPrice(order.amount_paid)}
          </span>
        </p>
      </div>
      {order.cartList.map((product) => {
        const { id, image, name, price, color, amount } = product;

        return (
          <article
            key={id}
            className="grid grid-cols-for-list gap-x-8 items-center justify-center"
          >
            <img
              src={image}
              alt={name}
              className="block w-[200px] h-[100px] object-cover radius mb-4"
            />
            <div>
              <h5 className="mb-2 font-bold">
                {amount > 1
                  ? `${name} ${amount} Items`
                  : `${name} ${amount} Item`}
              </h5>
              <p
                className="w-3 h-3 rounded-full bg-[#222] mr-2 border-none cursor-pointer opacity-100 flex items-center justify-center"
                style={{ background: color }}
              ></p>
              <h5 className="price text-primary-6 mb-3  font-bold">
                {formatPrice(price)}
              </h5>
            </div>
          </article>
        );
      })}
    </main>
  );
};
