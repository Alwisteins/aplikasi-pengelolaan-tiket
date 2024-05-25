import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import { Card, CardLong } from "../../components/card/Card";
import Chart from "../../components/chart/Chart";
import Task from "../../components/task/Task";

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
    <div className="p-5 h-full space-y-12 bg-[#f7fafe]">
      <Topbar page="Overview" />
      <div className="space-y-5">
        <div className="flex justify-center space-x-14">
          <Card title="Unresolved" total={tickets?.[0].unresolved} />
          <Card title="Overdue" total={tickets?.[1].overdue} />
          <Card title="Open" total={tickets?.[2].open} />
          <Card title="On hold" total={tickets?.[3].onHold} />
        </div>
        <div>
          <div className="flex rounded-sm bg-white">
            <div className="px-10 flex flex-col justify-center space-y-10 w-3/4 border-r-2 border-slate-400">
              <div>
                <h1 className="text-xl font-bold">Today's trends</h1>
                <p className="font-medium text-slate-400 text-xs">
                  as of 25 Mai 2019. 09:41 PM
                </p>
              </div>
              <div className="self-center">
                <Chart />
              </div>
            </div>
            <div>
              <CardLong title="resolved" total={449} />
              <CardLong title="resolved" total={449} />
              <CardLong title="resolved" total={449} />
              <CardLong title="resolved" total={449} />
              <CardLong title="resolved" total={449} />
            </div>
          </div>
        </div>
        <div className="flex w-full space-x-5">
          <div className="bg-white p-8 space-y-3 grow">
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-bold">Unresolved Tickets</h1>
                <p className="font-medium text-slate-400 text-xs">
                  Group: <span className="text-black">Support</span>
                </p>
              </div>
              <button className="text-blue-700">View details</button>
            </div>
            <div>
              <div className="flex justify-between p-3 border-b-2 border-slate-200">
                <p className="font-medium">Waiting on Feature Request</p>
                <p className="font-medium text-slate-400">4238</p>
              </div>
              <div className="flex justify-between p-3 border-b-2 border-slate-200">
                <p className="font-medium">Awaiting Customers Response</p>
                <p className="font-medium text-slate-400">1005</p>
              </div>
              <div className="flex justify-between p-3 border-b-2 border-slate-200">
                <p className="font-medium">Awaiting Developer Fix</p>
                <p className="font-medium text-slate-400">914</p>
              </div>
              <div className="flex justify-between p-3 border-b-2 border-slate-200">
                <p className="font-medium">Pending</p>
                <p className="font-medium text-slate-400">281</p>
              </div>
            </div>
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
}
