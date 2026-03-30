import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true 
});

// 🔐 Attach token automatically
API.interceptors.request.use(
  (config) => {
    try {
      const storedUser = localStorage.getItem("user");
      
      // Check if user exists and isn't the literal string "undefined"
      if (storedUser && storedUser !== "undefined") {
        const user = JSON.parse(storedUser);
        if (user?.token) {
          config.headers.Authorization = `Bearer ${user.token}`;
        }
      }
    } catch (err) {
      console.error("Axios Interceptor Error:", err);
      // We don't want to block the request if parsing fails
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;