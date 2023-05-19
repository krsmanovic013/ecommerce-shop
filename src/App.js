import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  About,
} from "./pages";
function App() {
  return (
    // <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    // </AuthWrapper>
  );
}
export default App;
