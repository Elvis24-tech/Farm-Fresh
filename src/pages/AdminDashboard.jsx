import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const allowedEmail = 'elvis@farmart.com';

  useEffect(() => {
    if (!user) return; // wait until user is checked
    if (user.email !== allowedEmail) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();         // ⛔ Sign out from Firebase
    navigate('/login');     // ✅ Redirect to login
  };

  if (!user || user.email !== allowedEmail) {
    return null; // prevent flicker while redirecting
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, Admin</h1>
      <p style={styles.subtext}>You are logged in as: {user.email}</p>

      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Manage Animals</h2>
          <p>Add, update, or remove animals for sale.</p>
        </div>
        <div style={styles.card}>
          <h2>View Orders</h2>
          <p>Check incoming customer orders and statuses.</p>
        </div>
        <div style={styles.card}>
          <h2>Profile</h2>
          <p>Update your admin profile information.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#16a34a',
    marginBottom: '1rem',
  },
  subtext: {
    color: '#6b7280',
    marginBottom: '2rem',
  },
  logoutButton: {
    marginBottom: '2rem',
    padding: '0.5rem 1rem',
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
};
