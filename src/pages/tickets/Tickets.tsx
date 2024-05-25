import axios from "axios";
import { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import TicketTable from "../../components/table/Table";

interface Ticket {
  profilePict: string;
  ticketName: string;
  ticketUpdatedAt: string;
  customerName: string;
  customerCreatedAt: string;
  ticketDate: string;
  ticketPriority: string;
}

export type Tickets = Ticket[];

export default function Tickets() {
  const [tickets, setTickets] = useState<Tickets | null>(null);
  const url = "http://localhost:3000/tickets";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTickets(response.data);
    });
  });

  return (
    <div className="p-5 h-full space-y-12 bg-[#f7fafe]">
      <Topbar page="Tickets" />
      <TicketTable tickets={tickets} />
    </div>
  );
}
