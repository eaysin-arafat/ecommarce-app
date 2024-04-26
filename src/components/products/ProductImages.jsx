/* eslint-disable react/prop-types */
import { useState } from "react";

export const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <section>
      <img
        className="main w-full block radius object-cover h-[300px] md:h-[500px] lg:h-[500px]"
        src={main.url}
        alt="main"
      />

      <div className="gallary mt-4 grid grid-cols-5 gap-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.filename}
            onClick={() => setMain(images[index])}
            className={`w-full block radius object-cover h-[50px] lg:h-[75px] cursor-pointer ${
              image.url === main.url
                ? "shadow-single-product-image-gallary"
                : null
            }`}
          />
        ))}
      </div>
    </section>
  );
};
