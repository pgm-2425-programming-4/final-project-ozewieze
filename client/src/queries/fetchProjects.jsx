import { API_URL, API_TOKEN } from '../constants/constants';

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
}
