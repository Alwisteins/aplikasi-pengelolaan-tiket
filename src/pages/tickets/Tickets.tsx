import Topbar from "../../components/topbar/Topbar";
import TicketTable from "../../components/table/Table";
import { useTickets } from "../../hooks/useTickets";

export default function Tickets() {
  const { tickets } = useTickets();

  return (
    <div className="p-5 h-full space-y-12 bg-[#f7fafe]">
      <Topbar page="Tickets" />
      <TicketTable tickets={tickets} />
    </div>
  );
}
