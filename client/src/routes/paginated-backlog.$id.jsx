import { createFileRoute } from '@tanstack/react-router';
import PaginatedBacklog from '../components/PaginatedBacklog/PaginatedBacklog.jsx';

export const Route = createFileRoute('/paginated-backlog/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <PaginatedBacklog currentProject={id} />;
}
