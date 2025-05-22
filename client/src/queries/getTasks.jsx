import { API_URL, API_TOKEN } from '../constants/constants';
export async function getTasks(currentPage, pageSize) {
  const result = await fetch(
    `${API_URL}/tasks?populate=*&filters[statuses][name][$eq]=Backlog&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
    {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    }
  );
  const data = await result.json();
  return data;
}
