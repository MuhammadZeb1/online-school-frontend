import API from "../../services/axios";

// REGISTER
export const registerAPI = async (userData) => {
  const { data } = await API.post("/auth/register", userData);
  return data;
};

// LOGIN
export const loginAPI = async (userData) => {
  const { data } = await API.post("/auth/login", userData);
  return data;
};
