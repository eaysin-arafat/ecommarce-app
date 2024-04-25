import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  DashboardPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from "../pages";
import { OrderPage } from "../pages/OrderPage";

export const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order-summary" element={<OrderPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
};
