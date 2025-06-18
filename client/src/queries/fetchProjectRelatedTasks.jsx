import { API_URL, API_TOKEN } from '../constants/constants';

export async function fetchProjectRelatedTasks(projectId) {
  const response = await fetch(
    // `${API_URL}/projects/${projectId}?populate[tasks][populate][0]=task_status&[populate][0]=labels`,
    `${API_URL}/projects/${projectId}?populate[tasks][populate][0]=task_status&populate[tasks][populate][1]=labels`,

    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  const data = await response.json();
  return data;
}

export async function fetchAllStatuses() {
  const response = await fetch(`${API_URL}/statuses?sort=order:asc`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch statuses');
  }

  const data = await response.json();

  return data;
}
