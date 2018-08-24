const API_URL = process.env.REACT_APP_API_URL || "/";
const axios = require("axios");
const instance = axios.create({
  baseURL: API_URL
});

export const getShelters = () => {
  return instance.get("/api/shelters").then(res => res.data);
};

export const getReferrals = () => {
  return instance.get("/api/referrals").then(res => res.data);
};

export const getUsers = () => {
  return instance.get("/api/users").then(res => res.data);
};

export const getUserProfile = () => {
  return instance.get("/user/profile");
};

export const getOrganisationsRegister = () => {
  return instance.get("/api/organisationsRegister");
};

export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password });

  localStorage.setItem("jwtToken", data.token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

  return data.token;
};
