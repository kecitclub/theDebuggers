import api from "./axios";

export const categories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const trandingProposals = async () => {
  const response = await api.get("/tranding-proposals");
  return response.data;
};
