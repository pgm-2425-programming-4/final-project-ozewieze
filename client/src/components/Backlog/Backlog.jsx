import './Backlog.css';
export function Backlog({ tasks }) {
  return (
    <div>
      <table>
        <tbody className="backlog-board">
          {tasks.map(task => (
            <tr key={task.id} className="card">
              <td>
                <p>{task.Title}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
