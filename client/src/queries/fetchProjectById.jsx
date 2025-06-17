import { API_URL, API_TOKEN } from '../constants/constants';

export async function fetchProjectById(id) {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'Application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }

  const data = await response.json();
  console.log('current project: ', data);
  return data;
}
