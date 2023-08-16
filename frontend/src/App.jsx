import { Routes, Route } from "react-router-dom";
//////////////////////////////////////////////////////////////////// importing from components
import Navbar from "./components/Navbar";
//////////////////////////////////////////////////////////////////// importing from pages
import AuthLogin from "./pages/AuthLogin";
import AuthSignup from "./pages/AuthSignup";
import Home from "./pages/Home";
import ProductsLayout from "./pages/ProductsLayout";
import ProductDetail from "./pages/ProductDetail";
import UserProducts from "./pages/UserProducts";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/signup" element={<AuthSignup />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/addProduct" element={<AddProduct />} />
          <Route path="/chart" element={<Cart />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/products" element={<ProductsLayout />}>
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/myProducts/:userName"
              element={<UserProducts />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
