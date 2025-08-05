import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);

    try {
      // Replace URL if your backend path is different
      const response = await axios.post("http://localhost:8000/api/login", {
        email: form.email,
        password: form.password,
      });

      console.log("response", response.data);

      // Optional: save token or user (if backend returns one)
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("user", JSON.stringify(response.data.user));

      setForm({ email: "", password: "" });

      navigate("/"); // go to homepage (adjust path if needed)
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      // Optional: show UI error (toast / text)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Login to Skill Bridge
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <Link to="/">
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white py-2 rounded transition`}
              to="/"
            >
              {loading ? "Logging in..." : "Loging"}
            </button>
          </Link>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
