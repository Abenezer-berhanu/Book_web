import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//////////////////////////////////////////////////////////////////// importing from components
import Navbar from "./components/Navbar";
import { login } from "./store/userSlice";
//////////////////////////////////////////////////////////////////// importing from pages
import AuthLogin from "./pages/AuthLogin";
import AuthSignup from "./pages/AuthSignup";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import UserProducts from "./pages/UserProducts";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Products from "./pages/Products";
import Notfound from "./pages/Notfound";
///////////////////////////////////////////////////////////importing from file

export default function App() {
  const isLoggedIn = useSelector((state) => state.loggedIn.isActive);
  const dispatch = useDispatch();
  useEffect(() => {
    if (document.cookie) {
      dispatch(login());
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Products />}/>
            <Route path="/myProducts" element={<UserProducts />} />
          </Route>
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<AuthLogin />} />
              <Route path="/signup" element={<AuthSignup />} />
            </>
          )}
          {isLoggedIn && (
            <>
              <Route path="/products/:id" element={(<ProductDetail />)} />
              <Route path="/products/addProduct" element={<AddProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </>
          )}
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}
