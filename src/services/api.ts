import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export function createAPI() {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const api = createAPI();