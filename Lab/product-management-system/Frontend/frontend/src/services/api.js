import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update this URL according to your backend

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
