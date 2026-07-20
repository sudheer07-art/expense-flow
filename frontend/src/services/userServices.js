import api from "./api";


// Get logged-in user

export const getCurrentUser = async () => {

  const response = await api.get(
    "/auth/me"
  );

  return response.data;

};



// Update profile

export const updateProfile = async (
  data
) => {

  const response = await api.put(
    "/auth/profile",
    data
  );

  return response.data;

};