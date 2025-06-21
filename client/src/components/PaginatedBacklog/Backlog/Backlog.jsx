import './Backlog.css';
export function Backlog({ tasks, total }) {
  return (
    <>
      {' '}
      <main className="backlog-board">
        <h3>Backlog</h3>
        <div>
          <span className="total-items">
            {total}
            {total === 1 ? ' Task' : ' Tasks'}
          </span>
        </div>

        <table>
          <tbody className="backlog-board">
            {tasks.map((task) => {
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
