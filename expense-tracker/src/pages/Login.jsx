import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login (you can connect with backend later)
    if (email === "test@gmail.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try test@gmail.com / 123456");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md outline-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md outline-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

