export function Backlog({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.Title}</li>
        ))}
      </ul>
    </div>
  );
}
