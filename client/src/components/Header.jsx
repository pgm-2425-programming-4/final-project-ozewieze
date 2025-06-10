import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className="board-header">
      <form action="#">
        <select className="select" name="tags" id="tag-select">
          <option value="infra">Infra</option>
          <option value="back-end">Back-end</option>
          <option value="front-end">Front-end</option>
          <option value="documentation">Documentation</option>
        </select>
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
          Active project: <span>PGM3</span>
        </p>
        <button className="btn add-task">Add new task</button>
        <Link to="/paginated-backlog" className="btn view-backlog">
          View backlog
        </Link>
      </div>
    </header>
  );
}
