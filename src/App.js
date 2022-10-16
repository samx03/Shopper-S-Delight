import React from 'react';
import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import ProductDetail from './pages/ProductDetail';

const App = () => (
    <Routes>
      <Route exact path="/" element={<Landing />}></Route>
      <Route exact path="/products" element={<Products />}>
      </Route>
      <Route exact path="/product-detail" element={<ProductDetail />}>
      </Route>
    </Routes>
);

export default App;