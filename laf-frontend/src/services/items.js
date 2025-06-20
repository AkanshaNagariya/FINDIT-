import api from './api';

export const getItems = async () => {
  try {
    const response = await api.get('/api/items');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch items';
  }
};

export const getItemById = async (itemId) => {
  try {
    const response = await api.get(`/api/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch item details';
  }
};

export const searchItems = async (params) => {
  try {
    const response = await api.get('/api/items/search', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Search failed';
  }
};

export const reportItem = async (itemData) => {
  try {
    const response = await api.post('/api/items', itemData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to report item';
  }
};

export const updateItem = async (itemId, updateData) => {
  try {
    const response = await api.put(`/api/items/${itemId}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to update item';
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await api.delete(`/api/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to delete item';
  }
};

export const submitClaim = async (itemId, claimData) => {
  try {
    const response = await api.post(`/api/items/${itemId}/claims`, claimData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to submit claim';
  }
};

export const getClaims = async () => {
  try {
    const response = await api.get('/api/admin/claims');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch claims';
  }
};

export const updateClaimStatus = async (claimId, status) => {
  try {
    const response = await api.put(`/api/admin/claims/${claimId}`, { status });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to update claim status';
  }
};

export const getUserItems = async (userId) => {
  try {
    const response = await api.get(`/api/users/${userId}/items`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch user items';
  }
};