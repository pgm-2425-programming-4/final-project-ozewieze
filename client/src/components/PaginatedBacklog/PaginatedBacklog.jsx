import { useEffect, useState } from 'react';
import { API_TOKEN, API_URL } from '../../constants/constants';
import { Backlog } from './Backlog/Backlog';
import { Pagination } from './Pagination/Pagination';

function PaginatedBacklog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function handlePageSizeChanged(size) {
    setPageSize(size);
  }
  useEffect(() => {
    //your-strapi-app.onrender.com/api/tasks?populate=* has been blocked by CORS policy

    fetch(
      `${API_URL}?populate=*&filters[statuses][name][$eq]=Backlog&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      }
    )
      .then(data => data.json())
      .then(jsondata => {
        if (currentPage > jsondata.meta.pagination.pageCount) {
          setCurrentPage(jsondata.meta.pagination.pageCount);
        }
        console.log(jsondata);
        setTasks(jsondata.data);
        setPageCount(jsondata.meta.pagination.pageCount);
      });
  }, [currentPage, pageSize]);
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
