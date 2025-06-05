import { API_URL, API_TOKEN } from '../constants/constants';
import { useQuery } from '@tanstack/react-query';

export function useFetchProjectRelatedTasks(projectId) {
  const { isPending, error, data } = useQuery({
    queryKey: ['project', projectId, 'with-tasks'],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:1337/api/projects/${projectId}?populate[tasks][populate][0]=statuses`,
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
    },
  });
  console.log('project id :', projectId);
  console.log('project related data:', data);
  return { isPending, error, data };
}
export function useFetchAllStatuses() {
  const { isPending, error, data } = useQuery({
    queryKey: ['statuses'],
    queryFn: async () => {
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
    },
  });

  return { isPending, error, data };
}
