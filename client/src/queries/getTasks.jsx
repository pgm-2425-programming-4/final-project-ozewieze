import { API_URL, API_TOKEN } from '../constants/constants';
export async function getTasks(currentPage, pageSize, currentProject) {
  const result = await fetch(
    // `${API_URL}/tasks?populate=*&filters[task_status][name][$eq]=Backlog&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
    `${API_URL}/tasks?populate=*&filters[task_status][name][$eq]=Backlog&filters[project][documentId][$eq]=${currentProject}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
    {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    },
    //tasks?populate=task_status&filters[task_status][name][$eq]=Backlog krijgt de juiste data voor backlog alle projecten
    // http://localhost:1337/api/tasks?populate=*&filters[task_status][name][$eq]=Backlog&filters[project][documentId][$eq]=luzo3k783vfxixn8p1s46emd
  );
  const data = await result.json();
  console.log('data from getTasks:', data);
  return data;
}
