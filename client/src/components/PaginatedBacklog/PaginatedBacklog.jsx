import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Backlog } from './Backlog/Backlog';
import { Pagination } from './Pagination/Pagination';
import { getTasks } from '../../queries/getTasks';

function PaginatedBacklog({ currentProject }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function handlePageSizeChanged(size) {
    setPageSize(size);
  }
  const { isPending, error, data } = useQuery({
    queryKey: ['backlog-tasks', currentPage, pageSize, currentProject],
    queryFn: () => getTasks(currentPage, pageSize, currentProject),
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
      <Backlog tasks={data.data} total={data.meta.pagination.total} />
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
