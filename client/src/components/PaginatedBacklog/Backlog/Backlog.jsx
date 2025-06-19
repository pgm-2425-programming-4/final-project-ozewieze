import './Backlog.css';
export function Backlog({ tasks, total }) {
  return (
    <>
      {' '}
      <main class="backlog-board">
        <h3>Backlog</h3>
        <div>
          <span class="total-items">{total} Tasks</span>
        </div>

        <table>
          <tbody className="backlog-board">
            {tasks.map(task => {
              return (
                <tr key={task.id} className="card">
                  <td>
                    <p>{task.Task}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
