import axios from 'axios';

export const key = '92d2aa86'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;