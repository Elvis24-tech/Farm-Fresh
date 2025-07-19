import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/farmartlogo.png';

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
    <header className="bg-white border-b border-green-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1120px] mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
        >
          <img
            src={logo}
            alt="Farmart Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-3xl font-bold text-green-600">
            Farmart
          </span>
        </Link>

        <nav className={`${open ? 'flex' : 'hidden'} md:flex items-center gap-5 
          md:static absolute top-full left-0 right-0 bg-white md:bg-transparent
          flex-col md:flex-row md:gap-5 p-4 md:p-0`}>
          
          <Link 
            to="/about" 
            className="text-gray-700 font-medium hover:text-green-600 transition-colors no-underline"
          >
            About
          </Link>

          {user?.email === 'elvis@farmart.com' && (
            <Link 
              to="/admin"
              className="text-gray-700 font-medium hover:text-green-600 transition-colors no-underline"
            >
              Admin
            </Link>
          )}

          {/* Login/Logout */}
          {user ? (
            <Button variant="outline" onClick={logout} className="flex items-center gap-2">
              <User className="h-4 w-4" /> Logout
            </Button>
          ) : (
            <Button variant="outline" onClick={() => navigate('/login')} className="flex items-center gap-2">
              <User className="h-4 w-4" /> Login
            </Button>
          )}

          <Link to="/cart">
            <Button className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold 
                    px-1.5 py-0.5 rounded-full leading-none min-w-[16px] h-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Button>
          </Link>
        </nav>

        <Button
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}