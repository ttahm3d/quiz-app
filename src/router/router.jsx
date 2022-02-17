import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Homepage = lazy(() => import("../views/Homepage/Homepage"));
const Rules = lazy(() => import("../views/Quiz/Rules"));
const Quiz = lazy(() => import("../views/Quiz/Quiz"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
};

export default Router;
