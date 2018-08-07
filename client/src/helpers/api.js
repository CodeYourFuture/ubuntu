const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const getStatus = () => {
  return fetch(`${API_URL}/api/status`).then(res => res.json());
};
