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
export const district = async (province_id) => {
  const response = await api.get(`/districts/${province_id}`);
  return response.data;
};
export const municipalities = async (district_id) => {
  const response = await api.get(`/municipalities/${district_id}`);
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
