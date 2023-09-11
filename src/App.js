import "./App.css";
import Home from "./componets/Pages/Home";
import Cart from "./componets/Pages/Cart";
import CheckOut from "./componets/Pages/CheckOut";
import ProductDetail from "./componets/Pages/ProductDetail";
import { Route, Routes } from "react-router";
import Login from "./componets/Pages/Login";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
