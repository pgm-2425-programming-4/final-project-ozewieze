import { Link } from '@tanstack/react-router';
import { fetchProjectById } from '../queries/fetchProjectById';
import { useQuery } from '@tanstack/react-query';

export function Header({ projectId }) {
  const { isPending, isError, data } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => await fetchProjectById(projectId),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {isError.message}</span>;
  }

  console.log('header individueel project: ', data.data.Project);
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
          Active project: <span>{data.data.Project}</span>
        </p>
        <button className="btn add-task">Add new task</button>
        <Link
          to="/paginated-backlog/$id"
          className="btn view-backlog"
          params={{ id: projectId }}
        >
          View backlog
        </Link>
      </div>
    </header>
  );
}
