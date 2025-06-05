import "./Backlog.css";
export function Backlog({ tasks }) {
  return (
    <div>
      <table>
        <tbody className="backlog-board">
          {tasks.map((task) => {
            if (task.statuses && task.statuses.name === "Backlog") {
              return (
                <tr key={task.id} className="card">
                  <td>
                    <p>{task.Title}</p>
                  </td>
                </tr>
              );
            }
            return null; // Explicitly return null for non-Backlog tasks
          })}
        </tbody>
      </table>
    </div>
  );
}
