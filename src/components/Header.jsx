import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  const handleLogin = () => {
    alert('Login functionality not implemented yet.');
  };

  return (
    <header>
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="logo">🐄 Farmart</div>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/">Animals</Link>
          <Link to="/">Farmers</Link>
          <Link to="/about">About</Link>

          <Button variant="outline" onClick={handleLogin}>
            <User className="mr-2 h-4 w-4" /> Login
          </Button>

          {/* ✅ Link to Cart Page */}
          <Link to="/cart">
            <Button>
              <div className="cart-badge-container">
                <ShoppingCart />
                {cartItems.length > 0 && (
                  <span className="cart-item-count">{cartItems.length}</span>
                )}
              </div>
              <span className="ml-2">Cart</span>
            </Button>
          </Link>
        </nav>

        <Button
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="hamburger-btn"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}
