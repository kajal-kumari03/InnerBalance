import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "client", // default role
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/signup", form);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
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
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="professor">Professor</option>
        <option value="client">Client</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
};

export { SignupForm };
