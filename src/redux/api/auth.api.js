import axios from 'axios';

export const register = async (userData) => {
  try {
    const response = await axios.post('https://api.example.com/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed');
  }
};
