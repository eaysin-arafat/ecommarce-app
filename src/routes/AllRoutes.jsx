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
import ProtectedRoute from "./ProtectedRoute";
import { OrderPage } from "../pages/OrderPage";

export const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
};
