import { Routes, Route } from "react-router-dom";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";

import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";
import FullPizza from "./components/pages/FullPizza";
import MainLayouts from "./layouts/MainLayouts";
import "./scss/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
