import React, { useState } from "react";
import API from "../api/axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      const { role, token, user } = res.data;

      // Save token if needed
      localStorage.setItem("token", token);

      dispatch(loginSuccess(user));

      // Role-based redirection
      if (role === "admin") navigate("/admin");
      else if (role === "professor") navigate("/professor");
      else if (role === "client") navigate("/client");
      else navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export { LoginForm };
