import apiClient from './apiClient';

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/users/login', credentials);
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post('/users/register', userData);
    console.log('Register response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};

export const getProfile = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    console.log('User profile response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Get user profile error:', error);
    throw error;
  }
};

export const updateProfile = async (userId, userData) => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData);
    console.log('Update user profile response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Update user profile error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await apiClient.post('/users/logout');
    console.log('Logout response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};
