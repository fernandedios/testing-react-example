import axios from 'axios';
import { API_URL } from '../constants';

export default async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
