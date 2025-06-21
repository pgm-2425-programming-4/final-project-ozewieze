import { useQueryClient } from '@tanstack/react-query';
import { updateTaskStatus } from '../queries/updateTaskStatus';

// TaskDetailDialog.jsx
export function TaskDetailDialog({ task, onClose, projectId, statusesData }) {
  const queryClient = useQueryClient();
  async function handleStatusChange(newStatusId) {
    try {
      await updateTaskStatus(task.documentId, newStatusId); //could have used tanstack useMutation, but was actually more complex
      queryClient.invalidateQueries(['project', projectId, 'with-tasks']);
      onClose();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  }

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>{task.Task}</h2>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>
        <div className="dialog-body">
          <div className="field">
            <label>Description</label>
            <p>{task.description || 'No description'}</p>
          </div>
          <div className="field">
            <label>Status</label>
            <select
              value={task.task_status?.documentId || ''}
              onChange={(e) => handleStatusChange(e.target.value)}
            >
              {statusesData.data.map((status) => (
                <option key={status.id} value={status.documentId}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <div className="labels">
              {task.labels?.map((label) => (
                <span
                  key={label.id}
                  className="tag"
                  style={{ backgroundColor: label.color }}
                >
                  {label.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
