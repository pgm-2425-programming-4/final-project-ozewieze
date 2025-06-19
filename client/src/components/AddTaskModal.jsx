export function AddTaskModal({
  labelsData,
  statusData,
  taskForm,
  setTaskForm,
  onSubmit,
  onClose,
}) {
  // The onChange triggers the toggle, which updates the state, which updates the checked visual state. It's a complete reactive cycle!
  const handleLabelToggle = labelId => {
    setTaskForm(prev => ({
      ...prev,
      selectedLabels: prev.selectedLabels.includes(labelId)
        ? prev.selectedLabels.filter(id => id !== labelId)
        : [...prev.selectedLabels, labelId],
    }));
  };
  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>Add New Task</h2>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="field">
            <label>Title:</label>
            <input
              type="text"
              value={taskForm.title}
              onChange={e =>
                setTaskForm(prev => ({ ...prev, title: e.target.value }))
              }
              required
            />
          </div>

          <div className="field">
            <label>Description:</label>
            <textarea
              value={taskForm.description}
              onChange={e =>
                setTaskForm(prev => ({ ...prev, description: e.target.value }))
              }
            />
          </div>

          <div className="field">
            <label>Status:</label>
            <select
              value={taskForm.selectedStatus}
              onChange={e => {
                console.log('selectedStatus: ', e.target);
                return setTaskForm(prev => ({
                  ...prev,
                  selectedStatus: e.target.value,
                }));
              }}
            >
              {statusData.data.map(status => (
                <option key={status.id} value={status.documentId}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Labels:</label>
            <div className="label-checkboxes">
              {labelsData.data.map(label => (
                <label key={label.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={taskForm.selectedLabels.includes(label.id)}
                    onChange={() => handleLabelToggle(label.id)}
                  />
                  <span
                    style={{ backgroundColor: label.color }}
                    className="label-preview"
                  >
                    {label.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}
