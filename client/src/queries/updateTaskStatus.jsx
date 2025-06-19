import { API_URL, API_TOKEN } from '../constants/constants';

export const updateTaskStatus = async (taskId, newStatusId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: { task_status: newStatusId },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update task status');
  }

  return response.json();
};
