import { Tickets } from "../../hooks/useTickets";
import { useSortAndFilter } from "../../hooks/useSortAndFilter";
import TableHeader from "./TableHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../../components/pagination/Pagination";

interface TicketTableProps {
  tickets: Tickets | null;
}

export default function TicketTable(props: TicketTableProps) {
  const { tickets } = props;
  const {
    rowsPerPage,
    currentPage,
    setCurrentPage,
    activePriority,
    sort,
    handleRowsPerPageChange,
    handleFilter,
    handleSort,
    handleResetSort,
    sortedTickets,
  } = useSortAndFilter(tickets);


  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = sortedTickets?.slice(firstIndex, lastIndex);

  return (
    <div className="overflow-x-auto">
      <div className="bg-white border border-gray-200 rounded-md">
        <TableHeader
          sort={sort}
          handleSort={handleSort}
          handleResetSort={handleResetSort}
          handleFilter={handleFilter}
          activePriority={activePriority}
        />
        <table className="w-full">
          <TableHead />
          <TableBody rows={rows} />
        </table>
        <Pagination
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalItems={sortedTickets?.length || 0}
          setCurrentPage={setCurrentPage}
          onChange={handleRowsPerPageChange}
        />
      </div>
    </div>
  );
}
