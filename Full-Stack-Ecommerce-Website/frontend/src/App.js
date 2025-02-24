import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { LoginSignUp } from "./Pages/LoginSignUp";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/men_banner.jpg";
import women_banner from "./Components/Assets/women_banner.jpg";
import kid_banner from "./Components/Assets/kid_banner.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory banner = {men_banner} category="men" />} />
          <Route path="/Womens" element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCategory banner = {kid_banner} category="kid" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
