import API from "../../services/axios.jsx";

export const registerAPI = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const loginAPI = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};