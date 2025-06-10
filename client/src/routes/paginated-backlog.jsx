import { createFileRoute } from '@tanstack/react-router';
import PaginatedBacklog from '../components/PaginatedBacklog/PaginatedBacklog.jsx';
import { Pagination } from '../components/PaginatedBacklog/Pagination/Pagination.jsx';

export const Route = createFileRoute('/paginated-backlog')({
  component: PaginatedBacklog,
});
