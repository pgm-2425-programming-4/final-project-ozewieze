import { API_URL, API_TOKEN } from '../constants/constants';
export async function getTasks(currentPage, pageSize, currentProject) {
  const result = await fetch(
    `${API_URL}/tasks?populate=*&filters[task_status][name][$eq]=Backlog&filters[project][documentId][$eq]=${currentProject}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
    {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    },
  );
  const data = await result.json();
  return data;
}
