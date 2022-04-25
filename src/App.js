import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Add from "./Routring/Add";
import Home from "./Routring/Home";
import List from "./Routring/List";
import Login from "./Routring/Login";
import Products from "./Routring/Products";
import ProductsDisplay from "./Routring/ProductsDisplay";
import Search from "./Routring/Search";
import "./Routring/index.css";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="login"> Login </Link>
          <Link to="products/search"> Products </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
            <Route path="add" element={<Add />} />
            <Route path=":id" element={<ProductsDisplay />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
