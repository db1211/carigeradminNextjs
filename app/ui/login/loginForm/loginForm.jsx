"use client";

import styles from "./loginForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"
import { login } from "@/app/slices/userSlics";
import URL from "@/app/constants";


const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://cariger-user-provider.onrender.com/api/v1/auth/adminLogin`, formData);
      // const response = await axios.post("http://localhost:4040/api/v1/auth/adminLogin", formData);
      dispatch(login(response.data.user));
      router.push("/dashboard"); // Navigate to the dashboard
    } catch (err) {
      setError("Error logging in");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
