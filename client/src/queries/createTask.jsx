import { API_URL, API_TOKEN } from '../constants/constants';
export const createTask = async taskData => {
  console.log('Sending taskData:', taskData); // ← Add this
  console.log('Stringified:', JSON.stringify({ data: taskData }));
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: taskData }),
  });

  if (!response.ok) {
    throw new Error('Failed to create task');
  }

  return response.json();
};
