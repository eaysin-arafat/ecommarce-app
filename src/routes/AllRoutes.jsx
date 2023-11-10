import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

export const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};
