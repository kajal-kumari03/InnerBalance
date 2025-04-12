// src/api/axios.js
import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:8000/", // Replace with your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;  // Make sure it's a default export
