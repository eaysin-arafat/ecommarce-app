/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  AddToCart,
  Error,
  Loading,
  PageHero,
  ProductImages,
  Stars,
} from "../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { capitalizeEachWord, formatPrice } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../features/products/productApiSlice";
import { single_product_url } from "../utils/constants";
import useTitle from "./../hooks/useTitle";

export const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleProduct(`${single_product_url}${id}`));
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = useSelector((state) => state.product);

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  useTitle(`${capitalizeEachWord(name)}`);
  console.log(name);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main>
      <PageHero title={name} product />

      <div className="page section section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>

        <div className="product-center grid gap-16 mt-8 lg:grid lg:grid-cols-2 lg:items-center">
          <ProductImages images={images} />

          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price text-primary-5 font-semibold lg:text-xl">
              {formatPrice(price)}
            </h5>
            <p className="desc leading-loose max-w-[45em]">{description}</p>
            <p className="info capitalize w-[300px] grid grid-cols-for-info">
              <span className="font-bold">Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info capitalize w-[300px] grid grid-cols-for-info">
              <span className="font-bold">SKU : </span> {sku}
            </p>
            <p className="info capitalize w-[300px] grid grid-cols-for-info">
              <span className="font-bold">Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};
