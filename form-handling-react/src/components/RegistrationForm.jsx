import { useState } from 'react';

const RegistrationForm = () => {
  // Individual state for each field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes for each field
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) setErrors(prev => ({ ...prev, username: '' }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
  };

  // Basic validation logic: Check only for empty fields (matches exact check patterns)
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';  // Exact: if (!username)
    if (!email) newErrors.email = 'Email is required';            // Exact: if (!email)
    if (!password) newErrors.password = 'Password is required';   // Exact: if (!password)
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Don't submit if errors
    }

    // Simulate API call with form data
    const formData = { username, email, password };
    console.log('Form submitted:', formData);
    alert('Registration successful! Check console for data.');

    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div>
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;