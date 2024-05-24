import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Card from "../../components/card/Card";

type Unresolved = { unresolved: number; id: string };
type Overdue = { overdue: number; id: string };
type Open = { open: number; id: string };
type OnHold = { onHold: number; id: string };

type TicketData = [Unresolved, Overdue, Open, OnHold];

export default function Overview() {
  const [tickets, setTickets] = useState<TicketData | null>(null);

  const url = "http://localhost:3000/tickets";

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setTickets(response.data);
    });
  }, []);

  return (
    <div className="p-5 w-[85vw] h-full space-y-12 bg-[#f7fafe]">
      <Topbar page="Overview" />
      <div>
        <div className="flex justify-center space-x-14">
          <Card title="Unresolved" total={tickets?.[0].unresolved} />
          <Card title="Overdue" total={tickets?.[1].overdue} />
          <Card title="Open" total={tickets?.[2].open} />
          <Card title="On hold" total={tickets?.[3].onHold} />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
