import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const allowedEmail = 'elvis@farmart.com';

  useEffect(() => {
    if (!user) return; 
    if (user.email !== allowedEmail) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();         
    navigate('/login');     
  };

  if (!user || user.email !== allowedEmail) {
    return null; 
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Welcome, Admin
      </h1>
      <p className="text-blue-900 mb-8">
        You are logged in as: {user.email}
      </p>

      <button 
        onClick={handleLogout} 
        className="mb-8 px-4 py-2 bg-red-500 hover:bg-red-600 text-white border-none rounded-lg cursor-pointer text-base transition-colors"
      >
        Logout
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Manage Animals
          </h2>
          <p className="text-gray-600">
            Add, update, or remove animals for sale.
          </p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
            View Orders
          </h2>
          <p className="text-gray-600">
            Check incoming customer orders and statuses.
          </p>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            Profile
          </h2>
          <p className="text-gray-600">
            Update your admin profile information.
          </p>
        </div>
      </div>
    </div>
  );
}