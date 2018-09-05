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

export const getOrganisations = () => {
  return fetch(`${API_URL}/api/organisations`).then(res => res.json());
};

export const getAddresses = () => {
  return fetch(`${API_URL}/api/addresses`).then(res => res.json());
};

export const getUsers = () => {
  return instance.get("/api/users").then(res => res.data);
};

export const getUserProfile = () => {
  return instance.get("/user/profile");
};

export const saveUser = userData => {
  return instance.post("api/users", userData);
};

export const getShelterAbout = () => {
  return instance.get("/api/shelter/about").then(res => res.data);
};

export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password });

  localStorage.setItem("jwtToken", data.token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

  return data.token;
};
