import { API_URL, API_TOKEN } from '../constants/constants';

export async function fetchLabels() {
  const response = await fetch(`${API_URL}/labels`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch labels');
  }
  const data = await response.json();
  return data;
}
