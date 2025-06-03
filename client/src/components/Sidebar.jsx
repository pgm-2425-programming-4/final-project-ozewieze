import { Link } from '@tanstack/react-router';
import { useFetchProjects } from '../queries/fetchProjects';

export function Sidebar() {
  //i rename data to projects, to avoid data.data in sidebar

  const { data: projects, isPending, error } = useFetchProjects();

  if (isPending) {
    return (
      <aside className="sidebar">
        <h1>PROJECTS</h1>
        <p>Loading projects...</p>
      </aside>
    );
  }
  if (error) {
    return (
      <aside className="sidebar">
        <h1>PROJECTS</h1>
        <p>Error loading projects</p>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <h1>PROJECTS</h1>
      <ul>
        {projects.data.map(project => (
          <li key={project.id}>
            <button className="btn sidebar-task">{project.Project}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
