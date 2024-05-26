import { useState } from "react";
import { Tickets } from "../../pages/tickets/Tickets";

const tableHead = ["Ticket details", "Customer name", "Date", "Priority"];

export default function TicketTable({ tickets }: { tickets: Tickets | null }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 8;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = tickets?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(tickets?.length / rowsPerPage);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const generateStyle = (priority: string): string => {
    if (priority == "high") {
      return `bg-red-400 text-white`;
    } else if (priority == "normal") {
      return `bg-green-400 text-white`;
    } else {
      return `bg-yellow-400 text-white`;
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="bg-white border border-gray-200 rounded-md">
        <div className="p-5 flex justify-between">
          <h1 className="text-lg font-medium">All tickets</h1>
          <div className="space-x-3 text-sm font-medium">
            <button>Sort</button>
            <button>Filter</button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th className="border-b-2" key={head}>
                  <p className="px-4 py-2 font-medium text-sm text-slate-400 text-left">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows &&
              rows.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className=" px-4 py-3 border-b">
                    <div className="flex items-center space-x-5">
                      <div className="bg-blue-700 rounded-full w-8 h-8"></div>
                      <div>
                        <h1 className="text-sm font-medium">
                          {item.ticketName}
                        </h1>
                        <p className="text-xs text-slate-300">
                          {item.ticketUpdatedAt}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b px-4">
                    <div>
                      <h1 className="space-x-3 text-sm font-medium">
                        {item.customerName}
                      </h1>
                      <p className="text-xs text-slate-300">
                        {item.customerCreatedAt}
                      </p>
                    </div>
                  </td>
                  <td className="border-b px-4 text-sm font-medium">
                    {item.ticketDate}
                  </td>
                  <td className="border-b px-4">
                    <p
                      className={`${generateStyle(
                        item.ticketPriority
                      )} inline text-xs py-1 px-3 rounded-2xl`}
                    >
                      {item.ticketPriority.toLocaleUpperCase()}
                    </p>
                  </td>
                </tr>
              ))}
            {!tickets && (
              <tr>
                <td className="px-4 py-2 border-b text-center" colSpan={7}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <nav className="flex justify-end space-x-3 py-5 px-8">
          <p className="text-sm text-slate-400">
            rows per page: <span className="text-black">{rowsPerPage}</span>
          </p>
          <p className="text-sm text-slate-400">
            {firstIndex + 1} - {lastIndex == 8 ? lastIndex : lastIndex - 1} of {tickets?.length}
          </p>
          <div className="flex space-x-5">
            <button className=" text-slate-400" onClick={prevPage}>
              prev
            </button>
            <button className=" text-slate-400" onClick={nextPage}>
              next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
