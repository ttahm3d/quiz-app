import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Homepage = lazy(() => import("../views/Homepage/Homepage"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default Router;
