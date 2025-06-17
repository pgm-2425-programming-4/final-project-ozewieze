import { useQuery } from '@tanstack/react-query';
import {
  fetchProjectRelatedTasks,
  fetchAllStatuses,
} from '../queries/fetchProjectRelatedTasks';

export function TaskBoard({ projectId }) {
  const {
    data: projectData,
    isPending: projectIsPending,
    error: projectError,
  } = useQuery({
    queryKey: ['project', projectId, 'with-tasks'],
    queryFn: () => fetchProjectRelatedTasks(projectId),
  });

  const {
    data: statusesData,
    isPending: statusesIsPending,
    error: statusesError,
  } = useQuery({ queryKey: ['statuses'], queryFn: fetchAllStatuses });

  if (projectIsPending || statusesIsPending) {
    return (
      <main className="task-board">
        <p>Loading projects...</p>
      </main>
    );
  }
  if (projectError || statusesError) {
    return <p>Error loading projects</p>;
  }
  if (projectData && statusesData) {
    const tasks = projectData.data.tasks;
    console.log('tasks returned:', tasks);

    const statuses = statusesData.data;
    console.log('statusesData returned: ', statuses);
    return (
      <main class="task-board">
        {statuses.map(status => {
          const statusRelatedTasks = tasks.filter(
            task => task.task_status && task.task_status.name === status.name,
          );
          console.log('status-related-tasks: ', statusRelatedTasks);
          if (status.name !== 'Backlog') {
            return (
              <div key={status.id}>
                {' '}
                <h3>{status.name}</h3>
                {statusRelatedTasks.map(task => (
                  <article class="card" key={task.id}>
                    <p>{task.Task}</p>
                    <p class="tag">Infra</p>
                  </article>
                ))}
              </div>
            );
          }
        })}
      </main>
    );
  }
}
