import './Backlog.css';
export function Backlog({ tasks }) {
  return (
    <>
      {' '}
      <main class="backlog-board">
        <h3>Backlog</h3>

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
