import api from "./axios";

export const categories = async () => {
  const response = await api.get("/categories");
  return response.data;
};
