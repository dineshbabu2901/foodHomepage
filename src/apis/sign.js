import api from "../Components/api";

const baseURL = "/post";

export const signin = (email, password) => {
  console.log(email, password, "jackj");
  return api.post(`${baseURL}/signin`, { email, password });
};

export const signup = (
  email,
  password,
  confirmPassword,
  Address,
  Location,
  Area,
  Nearby
) => {
  console.log(
    email,
    password,
    confirmPassword,
    Address,
    Location,
    Area,
    Nearby,
    "jackj"
  );
  return api.post(`${baseURL}/signup`, {
    email,
    password,
    confirmPassword,
    Address,
    Location,
    Area,
    Nearby,
  });
};
