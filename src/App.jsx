
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import Recommendation from "./pages/Recommendation";
import ComponentDemo from "./pages/ComponentDemo";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/demo" element={<ComponentDemo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;