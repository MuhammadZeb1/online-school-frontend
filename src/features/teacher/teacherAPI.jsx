import API from "../../services/axios";

// 📩 Request Teacher
export const requestTeacherAPI = async () => {
  const { data } = await API.post("/users/request-teacher");
  return data;
};
