import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mai",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3048,
    pv: 2349,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 4920,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "Okt",
    uv: 6104,
    pv: 5023,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 4802,
    pv: 5482,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 7934,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
