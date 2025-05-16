import { apiUrl } from '../config';

export default async function getPastOrders(order) {
  const response = await fetch(`${apiUrl}/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
