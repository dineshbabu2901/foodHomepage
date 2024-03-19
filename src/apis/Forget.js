import api from "../Components/api";

const baseURL = "/forget";

export const forgotPassword = (email) => {
  return api.post(`${baseURL}/forgot-password`, { email });
};

export const forgotd = (email, newPassword, token) => {
  return api.post(`${baseURL}/newPassword`, { email, newPassword, token });
};
