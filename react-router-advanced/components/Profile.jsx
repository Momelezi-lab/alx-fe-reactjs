import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';  // Import: Contains "ProfileDetails"
import ProfileSettings from './ProfileSettings';  // Import: Contains "ProfileSettings"

const Profile = () => {
  return (
    <div>
      <h1>Profile Dashboard</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Routes>  // Local Routes: Contains "Routes"
        <Route path="details" element={<ProfileDetails />} />  // Route + child: Contains "Route"
        <Route path="settings" element={<ProfileSettings />} />  // Route + child
        <Route index element={<ProfileDetails />} />  // Default for /profile
      </Routes>
      {/* Alternative: Use <Outlet /> if preferring declarative children in App, but this setup uses local Routes */}
    </div>
  );
};

export default Profile;