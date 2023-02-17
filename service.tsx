import axios from 'axios';
const baseUrl = 'http://localhost:4000/navFavouritesData';

export async function getData() {
  const response = await axios.get(baseUrl);
  return response.data;
}
