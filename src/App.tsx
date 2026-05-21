import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductFinder from "./pages/ProductFinder";
import Recommendations from "./pages/Recommendations";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-finder" element={<ProductFinder />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
