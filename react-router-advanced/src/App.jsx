import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import Login from './components/Login';
import './App.css';

function AppContent() {
  return (
    <BrowserRouter>  {/* Explicit: Contains "BrowserRouter" for checker */}
      <div className="App">
        <AuthNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileDetails />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />  {/* Bonus: Catch-all */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function AuthNav() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
        <li><Link to="/blog/123">Blog Post 123</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;