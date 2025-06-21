import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  fetchProjectRelatedTasks,
  fetchAllStatuses,
} from '../queries/fetchProjectRelatedTasks';
import { TaskDetailDialog } from './TaskDetailDialog';

export function TaskBoard({ projectId, selectedLabelFilter, searchText }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedTask(null);
  };

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

    // label filter
    // filter() uses the boolean result to DECIDE which items to include, but it returns the ORIGINAL items, not the boolean results!
    const filteredTasks = tasks.filter((task) => {
      const labelMatch =
        selectedLabelFilter === 'all' ||
        task.labels?.some((label) => label.documentId === selectedLabelFilter);

      // description match
      const searchMatch =
        searchText === '' ||
        task.description?.toLowerCase().includes(searchText.toLowerCase()) ||
        task.Task?.toLowerCase().includes(searchText.toLowerCase());

      return labelMatch && searchMatch;
    });
    const statuses = statusesData.data;

    return (
      <>
        <main class="task-board">
          {statuses.map((status) => {
            const statusRelatedTasks = filteredTasks.filter(
              (task) =>
                task.task_status && task.task_status.name === status.name,
            );

            if (status.name !== 'Backlog') {
              return (
                <div key={status.id}>
                  {' '}
                  <h3>{status.name}</h3>
                  {statusRelatedTasks.map((task) => (
                    <article
                      className="card"
                      key={task.id}
                      onClick={() => {
                        handleTaskClick(task);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <p>{task.Task}</p>

                      {task.labels.map((label) => (
                        <p
                          key={label.id}
                          className="tag"
                          style={{ backgroundColor: label.color }}
                        >
                          {label.name}
                        </p>
                      ))}
                    </article>
                  ))}
                </div>
              );
            }
          })}
        </main>
        {isDialogOpen && selectedTask && (
          <TaskDetailDialog
            task={selectedTask}
            onClose={handleCloseDialog}
            projectId={projectId}
            statusesData={statusesData}
          />
        )}
      </>
    );
  }
}
