import { Tickets } from "../../pages/tickets/Tickets";
import TableRow from "./TableRow";

interface TableBodyProps {
  rows: Tickets | null;
}

export default function TableBody(props: TableBodyProps) {
  const { rows } = props;
  return (
    <tbody>
      {rows && rows.length > 0 ? (
        rows.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <TableRow item={item} />
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3} className="px-4 py-2 border-b text-center">
            No data available
          </td>
        </tr>
      )}
    </tbody>
  );
}
