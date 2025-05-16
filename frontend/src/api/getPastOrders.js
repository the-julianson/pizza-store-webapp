import { apiUrl } from '../config';

export default async function getPastOrders(page) {
  const response = await fetch(`${apiUrl}/api/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
