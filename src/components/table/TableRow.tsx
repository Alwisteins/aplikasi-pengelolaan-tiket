import date from "../../utils/date";
import ticketPriorityStyle from "../../utils/ticketPriorityStyle";
import { Ticket } from "../../hooks/useTickets";

interface TableRowProps {
  item: Ticket;
}

export default function TableRow(props: TableRowProps) {
  const { item } = props;
  return (
    <>
      <td className="px-4 py-3 border-b">
        <div className="flex items-center space-x-5">
          <div className="bg-blue-700 rounded-full w-8 h-8"></div>
          <div>
            <h1 className="text-sm font-medium">{item.ticketName}</h1>
            <p className="text-xs text-slate-300">
              {date.formatDateDistance(item.ticketUpdatedAt)}
            </p>
          </div>
        </div>
      </td>
      <td className="border-b px-4">
        <div>
          <h1 className="text-sm font-medium">{item.customerName}</h1>
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
          className={`${ticketPriorityStyle(
            item.ticketPriority
          )} inline text-xs py-1 px-3 rounded-2xl`}
        >
          {item.ticketPriority.toUpperCase()}
        </p>
      </td>
    </>
  );
}
