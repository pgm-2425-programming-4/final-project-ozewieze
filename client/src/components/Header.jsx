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
        <a href="./backlog.html" className="btn view-backlog">
          View backlog
        </a>
      </div>
    </header>
  );
}
