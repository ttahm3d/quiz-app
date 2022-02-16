import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Homepage = lazy(() => import("../views/Homepage/Homepage"));
const Rules = lazy(() => import("../views/Quiz/Rules"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
};

export default Router;
