import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const adminEmail = 'elvis@farmart.com';

  if (!user) return <Navigate to="/login" />;
  if (user.email !== adminEmail) return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
