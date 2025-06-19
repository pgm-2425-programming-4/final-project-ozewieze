import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { fetchProjectById } from '../queries/fetchProjectById.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchLabels } from '../queries/fetchLabels';
import { fetchAllStatuses } from '../queries/fetchProjectRelatedTasks';
import { AddTaskModal } from './AddTaskModal.jsx';
import { createTask } from '../queries/createTask.jsx';

export function Header({ projectId }) {
  const queryClient = useQueryClient(); // Get the client instance
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    selectedLabels: [],
    selectedStatus: 1,
  });

  const {
    isPending: headerIsPending,
    isError: headerIsError,
    data: headerData,
  } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => await fetchProjectById(projectId),
  });

  const {
    isPending: labelsIsPending,
    isError: labelsIsError,
    data: labelsData,
  } = useQuery({
    queryKey: ['labels'],
    queryFn: async () => await fetchLabels(),
  });

  const {
    isPending: statusIsPending,
    isError: statusIsError,
    data: statusData,
  } = useQuery({
    queryKey: ['statuses'],
    queryFn: async () => await fetchAllStatuses(),
  });

  if (headerIsPending || labelsIsPending || statusIsPending) {
    return <span>Loading...</span>;
  }

  if (headerIsError || labelsIsError || statusIsError) {
    return <span>Error: {headerIsError.message}</span>;
  }
  console.log('the labeldata: ', labelsData);
  console.log('header individueel project: ', headerData.data.Project);
  console.log('statusData: ', statusData.data);

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };
  const handleSubmitTask = async e => {
    e.preventDefault();

    const newTask = {
      Task: taskForm.title,
      description: taskForm.description,
      project: projectId,
      task_status: taskForm.selectedStatus,
      labels: taskForm.selectedLabels,
    };

    try {
      await createTask(newTask);

      //former data is outdated, so refetch the updated data with that exact queryKey (react query cache is global):
      queryClient.invalidateQueries(['project', projectId, 'with-tasks']);
      setShowAddTaskModal(false);
      setTaskForm({
        title: '',
        description: '',
        selectedLabels: [],
        selectedStatus: 1,
      });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <>
      <header className="board-header">
        <form action="#">
          <select className="select" name="tags" id="tag-select">
            {labelsData.data.map(label => {
              return (
                <option key={label.id} value={label.id}>
                  {label.name}
                </option>
              );
            })}
          </select>
        </form>

        <form action="">
          <input
            className="input"
            type="text"
            name="search"
            placeholder="Search by description"
            aria-label="Search tasks"
          />
        </form>
        <div className="active-project">
          <p>
            Active project: <span>{headerData.data.Project}</span>
          </p>
          <button className="btn add-task" onClick={handleAddTask}>
            Add new task
          </button>
          <Link
            to="/paginated-backlog/$id"
            className="btn view-backlog"
            params={{ id: projectId }}
          >
            View backlog
          </Link>
        </div>
      </header>
      {showAddTaskModal && (
        <AddTaskModal
          // projectId={projectId}
          labelsData={labelsData}
          statusData={statusData}
          taskForm={taskForm}
          setTaskForm={setTaskForm}
          onSubmit={handleSubmitTask}
          onClose={() => {
            setShowAddTaskModal(false);
          }}
        />
      )}
    </>
  );
}
