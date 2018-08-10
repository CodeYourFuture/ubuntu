const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const getStatus = () => {
  return fetch(`${API_URL}/api/status`).then(res => res.json());
};

export const getShelters = () => {
  return fetch(`${API_URL}/api/shelters`).then(res => res.json());
};

export const getOrganisations = () => {
  return fetch(`${API_URL}/api/organisations`).then(res => res.json());
};
