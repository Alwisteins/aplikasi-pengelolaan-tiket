import { ChangeEvent } from "react";

interface PaginationProps {
  currentPage: number;
  rowsPerPage: number;
  totalItems: number;
  setCurrentPage: (page: number) => void;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Pagination({
  currentPage,
  rowsPerPage,
  totalItems,
  setCurrentPage,
  onChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const firstIndex = (currentPage - 1) * rowsPerPage + 1;
  const lastIndex = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <nav className="flex justify-end items-end space-x-3 py-5 px-8">
      <p className="text-sm text-slate-400">
        Rows per page:{" "}
        <select
          className="text-black"
          value={rowsPerPage}
          onChange={onChange}
        >
          <option value={5}>5</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
        </select>
      </p>
      <p className="text-sm text-slate-400">
        {firstIndex}-{lastIndex} of {totalItems}
      </p>
      <div className="flex space-x-5">
        <button
          className="text-slate-400"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          prev
        </button>
        <button
          className="text-slate-400"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          next
        </button>
      </div>
    </nav>
  );
}
