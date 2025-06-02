import * as React from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import '../../main.css';

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className="app-container">
        <aside className="sidebar">
          <h1>PROJECTS</h1>
          <ul>
            <li>
              <button className="btn sidebar-task">PGM3</button>
            </li>
            <li>
              <button className="btn sidebar-task">PGM4</button>
            </li>
          </ul>
        </aside>
        <div className="content-container">
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

          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </div>
    </React.Fragment>
  ),
});
