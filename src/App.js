import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Headers";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";
import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
