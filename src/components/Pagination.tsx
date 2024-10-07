type PaginationProps = {
  total: number;
  limit: number;
  currentPage: number;
  selectPage: (page: number) => void;
};

const Pagination = ({
  total,
  limit,
  currentPage,
  selectPage,
}: PaginationProps) => {
  const numPages = Math.ceil(total / limit);
  const pages = Array(numPages)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "active" : ""}
          data-testid="page-item"
          onClick={() => selectPage(page)}
        >
          <span className="page-link">{page}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
