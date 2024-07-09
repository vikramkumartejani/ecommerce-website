import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductSinglepage";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/Cart";
import ShopPage from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Checkout from "./pages/Checkout";
import Confirmationpage from "./components/Confirmation";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmationpage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
