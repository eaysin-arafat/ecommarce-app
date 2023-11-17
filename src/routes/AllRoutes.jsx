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
import { Login, Register } from "../components";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
};
