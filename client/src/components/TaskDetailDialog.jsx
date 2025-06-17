// TaskDetailDialog.jsx
export function TaskDetailDialog({ task, onClose }) {
  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
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
            <p>{task.task_status?.name}</p>
          </div>

          <div className="field">
            <div className="labels">
              {task.labels?.map(label => (
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
