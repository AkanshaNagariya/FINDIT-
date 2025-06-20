import axios from 'axios';

const API_URL = 'http://localhost:8080/api/items';

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const searchItems = async (filters) => {
  const response = await axios.get(`${API_URL}/search`, { params: filters });
  return response.data;
};
