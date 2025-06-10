import { Link } from '@tanstack/react-router';
import { fetchProjects } from '../queries/fetchProjects';
import { useQuery } from '@tanstack/react-query';
export function Sidebar() {
  const { data, isPending, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

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
        {/* {console.log(data.data)} */}
        {data.data.map(project => (
          <li key={project.id}>
            <Link
              to="/projects/$id"
              params={{ id: project.documentId }}
              className="btn sidebar-task"
            >
              {project.Project}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
