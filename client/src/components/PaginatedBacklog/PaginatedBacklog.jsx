import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Backlog } from './Backlog/Backlog';
import { Pagination } from './Pagination/Pagination';
import { getTasks } from '../queries/getTasks';

function PaginatedBacklog() {
  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(5);
  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function handlePageSizeChanged(size) {
    setPageSize(size);
  }
  const { isPending, error, data } = useQuery({
    queryKey: ['backlog-tasks', currentPage, pageSize],
    queryFn: () => getTasks(currentPage, pageSize),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred';
  const tasks = data?.data || [];
  const pageCount = data?.meta?.pagination?.pageCount || 1;
  return (
    <>
      <Backlog tasks={tasks} />
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChanged={handlePageChanged}
        onPageSizeChanged={handlePageSizeChanged}
        pageSize={pageSize}
      />
    </>
  );
}

export default PaginatedBacklog;
