import Topbar from "../../components/topbar/Topbar";
import Card from "../../components/card/Card";
import Chart from "../../components/chart/Chart";
import Task from "../../components/task/Task";
import {
  topCardData,
  sideCardData,
  unresolvedTicketsData,
} from "../../data/OverviewData";

export default function Overview() {
  return (
    <div className="p-5 h-full space-y-12 bg-[#f7fafe]">
      <Topbar page="Overview" />
      <div className="space-y-5">
        <div className="flex justify-center space-x-14">
          {topCardData.map((data) => (
            <Card
              title={data.title}
              total={data.total}
              AdditionalStyle="w-60 h-32"
            />
          ))}
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
              {sideCardData.map((data) => (
                <Card
                  title={data.title}
                  total={data.total}
                  AdditionalStyle="w-72 py-5"
                />
              ))}
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
              {unresolvedTicketsData.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between p-3 border-b-2 border-slate-200"
                >
                  <p className="font-medium">{data.title}</p>
                  <p className="font-medium text-slate-400">{data.total}</p>
                </div>
              ))}
            </div>
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
}
