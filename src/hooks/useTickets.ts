import { useState, useEffect } from "react";
import axios from "axios";

export interface Ticket {
  profilePict: string;
  ticketName: string;
  ticketUpdatedAt: string;
  customerName: string;
  customerCreatedAt: string;
  ticketDate: string;
  ticketPriority: string;
}

export type Tickets = Ticket[];

const url = "http://localhost:3000/tickets";

export const useTickets = () => {
  const [tickets, setTickets] = useState<Tickets | null>(null);

  const fetchTickets = async () => {
    const response = await axios.get(url);
    setTickets(response.data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return { tickets };
};
