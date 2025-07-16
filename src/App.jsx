import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';    // ✅ Cart page
import About from './pages/About';  // ✅ About page
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />    {/* ✅ Cart route */}
          <Route path="/about" element={<About />} />  {/* ✅ Add About route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
