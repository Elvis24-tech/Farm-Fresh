import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/farmartlogo.png'; // ✅ Make sure this image exists

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAnimals = () => {
    const section = document.getElementById('featured-animals');
    if (location.pathname === '/') {
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#featured-animals';
    }
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
        {/* ✅ Logo image with name */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <img
            src={logo}
            alt="Farmart Logo"
            style={{
              height: '40px',
              width: '40px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
          <span className="logo" style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--primary-color)' }}>
            Farmart
          </span>
        </Link>

        {/* ✅ Main navigation */}
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/about">About</Link>

          {/* 🧑‍🌾 Admin link if specific email */}
          {user?.email === 'elvis@farmart.com' && (
            <Link to="/admin">Admin</Link>
          )}

          {/* 🔐 Login or Logout */}
          {user ? (
            <Button variant="outline" onClick={logout}>
              <User className="mr-2 h-4 w-4" /> Logout
            </Button>
          ) : (
            <Button variant="outline" onClick={() => navigate('/login')}>
              <User className="mr-2 h-4 w-4" /> Login
            </Button>
          )}

          {/* 🛒 Cart */}
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

        {/* ☰ Hamburger button */}
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
