import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail.jsx";
import CartPage from "./pages/Cart.jsx";
import BaiViet from "./pages/baiviet.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Trang chủ 🏠</h1>} />
        <Route path="/product_detail" element={<ProductDetail />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/baiviet" element= {<BaiViet /> } />
      </Routes>
    </BrowserRouter>
  );
}
