import api from "./api";

export const getCurrentBudget = async () => {
  const res = await api.get("/budgets/current");
  return res.data;
};

export const getBudgets = async () => {
  const res = await api.get("/budgets");
  return res.data;
};

export const createBudget = async (data) => {
  const res = await api.post("/budgets", data);
  return res.data;
};

export const updateBudget = async (id, data) => {
  const res = await api.put(`/budgets/${id}`, data);
  return res.data;
};

export const deleteBudget = async (id) => {
  const res = await api.delete(`/budgets/${id}`);
  return res.data;
};