import { Routes, Route, Link } from 'react-router-dom';  // Contains "Routes", "Route"
import ProfileDetails from './ProfileDetails';  // Contains "ProfileDetails"
import ProfileSettings from './ProfileSettings';  // Contains "ProfileSettings"

const Profile = () => {
  return (
    <div>
      <h1>Profile Dashboard</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Routes>  // Explicit "Routes" for nesting
        <Route index element={<ProfileDetails />} />  // Explicit "Route" + index
        <Route path="details" element={<ProfileDetails />} />  // Explicit "Route" + details
        <Route path="settings" element={<ProfileSettings />} />  // Explicit "Route" + settings
      </Routes>
    </div>
  );
};

export default Profile;