import { useState, ChangeEvent } from "react";
import { Tickets } from "../../pages/tickets/Tickets";
import Pagination from "../../components/pagination/Pagination";
import date from "../date/Date";

const tableHead = ["Ticket details", "Customer name", "Date", "Priority"];

const generateStyle = (priority: string): string => {
  switch (priority) {
    case "high":
      return `bg-red-400 text-white`;
    case "normal":
      return `bg-green-400 text-white`;
    default:
      return `bg-yellow-400 text-white`;
  }
};

export default function TicketTable({ tickets }: { tickets: Tickets | null }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(8);
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = tickets?.slice(firstIndex, lastIndex);

  const handleRowsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="overflow-x-auto">
      <div className="bg-white border border-gray-200 rounded-md">
        <header className="p-5 flex justify-between">
          <h1 className="text-lg font-medium">All tickets</h1>
          <div className="space-x-3 text-sm font-medium">
            <button>Sort</button>
            <button>Filter</button>
          </div>
        </header>
        <table className="w-full">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th key={head} className="border-b-2 px-4 py-2 text-left">
                  <p className="font-medium text-sm text-slate-400">{head}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows && rows.length > 0 ? (
              rows.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border-b">
                    <div className="flex items-center space-x-5">
                      <div className="bg-blue-700 rounded-full w-8 h-8"></div>
                      <div>
                        <h1 className="text-sm font-medium">
                          {item.ticketName}
                        </h1>
                        <p className="text-xs text-slate-300">
                          {date.formatDateDistance(item.ticketUpdatedAt)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b px-4">
                    <div>
                      <h1 className="text-sm font-medium">
                        {item.customerName}
                      </h1>
                      <p className="text-xs text-slate-300">
                        {date.formatDateOn(item.customerCreatedAt)}
                      </p>
                    </div>
                  </td>
                  <td className="border-b px-4 text-sm font-medium">
                    {date.formatDateTicket(item.ticketDate)}
                    <p className="text-xs text-slate-300">
                      {date.formatTime(item.ticketDate)}
                    </p>
                  </td>
                  <td className="border-b px-4">
                    <p
                      className={`${generateStyle(
                        item.ticketPriority
                      )} inline text-xs py-1 px-3 rounded-2xl`}
                    >
                      {item.ticketPriority.toUpperCase()}
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tableHead.length}
                  className="px-4 py-2 border-b text-center"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalItems={tickets?.length || 0}
          setCurrentPage={setCurrentPage}
          onChange={handleRowsPerPageChange}
        />
      </div>
    </div>
  );
}
