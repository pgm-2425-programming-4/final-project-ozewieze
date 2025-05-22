import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Backlog } from './Backlog/Backlog';
import { Pagination } from './Pagination/Pagination';
import { getTasks } from '../../queries/getTasks';

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
  // useEffect(() => {
  //   fetch(
  //     `${API_URL}/tasks?populate=*&filters[statuses][name][$eq]=Backlog&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
  //     {
  //       headers: { Authorization: `Bearer ${API_TOKEN}` },
  //     }
  //   )
  //     .then(data => data.json())
  //     .then(jsondata => {
  //       if (currentPage > jsondata.meta.pagination.pageCount) {
  //         setCurrentPage(jsondata.meta.pagination.pageCount);
  //       }
  //       console.log(jsondata);
  //       setTasks(jsondata.data);
  //       setPageCount(jsondata.meta.pagination.pageCount);
  //     });
  // }, [currentPage, pageSize]);
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
