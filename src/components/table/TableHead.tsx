const tableHead = ["Ticket details", "Customer name", "Date", "Priority"];

export default function TableHead() {
  return (
    <thead>
      <tr>
        {tableHead.map((head) => (
          <th key={head} className="border-b-2 px-4 py-2 text-left">
            <p className="font-medium text-sm text-slate-400">{head}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
