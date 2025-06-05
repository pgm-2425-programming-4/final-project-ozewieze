import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Backlog } from './Backlog/Backlog';
import { Pagination } from './Pagination/Pagination';
import { getTasks } from '../../queries/getTasks';

function PaginatedBacklog() {
  // const [tasks, setTasks] = useState([]);

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

  // Still need useEffect only for the page boundary check!
  useEffect(() => {
    if (data) {
      if (currentPage > data.meta.pagination.pageCount) {
        setCurrentPage(data.meta.pagination.pageCount);
      }
    }
  }, [data, currentPage]);

  if (isPending) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;
  return (
    <>
      <Backlog tasks={data.data} />
      <Pagination
        pageCount={data.meta.pagination.pageCount}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChanged={handlePageChanged}
        onPageSizeChanged={handlePageSizeChanged}
      />
    </>
  );
}

export default PaginatedBacklog;
