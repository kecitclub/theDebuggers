import api from "./axios";

export const register = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};

export const login = async (data) => {
  const response = await api.post("/login", data);
  return response.data;
};
export const province = async () => {
  const response = await api.get("/provinces");
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/logout");
  return response.data;
};

export const getUser = async () => {
  const response = await api.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
