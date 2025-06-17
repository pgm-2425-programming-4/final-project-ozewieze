import { Link } from '@tanstack/react-router';
import { fetchProjectById } from '../queries/fetchProjectById.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchLabels } from '../queries/fetchLabels';

export function Header({ projectId }) {
  const {
    isPending: headerIsPending,
    isError: headerIsError,
    data: headerData,
  } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => await fetchProjectById(projectId),
  });

  const {
    isPending: labelsIsPending,
    isError: labelsIsError,
    data: labelsData,
  } = useQuery({
    queryKey: ['labels'],
    queryFn: async () => await fetchLabels(),
  });

  if (headerIsPending || labelsIsPending) {
    return <span>Loading...</span>;
  }

  if (headerIsError || labelsIsError) {
    return <span>Error: {headerIsError.message}</span>;
  }
  console.log('the labeldata: ', labelsData);
  console.log('header individueel project: ', headerData.data.Project);
  return (
    <header className="board-header">
      <form action="#">
        <select className="select" name="tags" id="tag-select">
          {labelsData.data.map(label => {
            return <option value={label.id}>{label.name}</option>;
          })}
        </select>
      </form>

      <form action="">
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
          Active project: <span>{headerData.data.Project}</span>
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
