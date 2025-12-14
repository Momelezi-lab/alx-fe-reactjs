import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Fake Login (Toggle Auth)</button>
    </div>
  );
};

export default Login;