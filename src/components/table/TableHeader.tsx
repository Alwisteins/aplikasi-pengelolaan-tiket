import SortModal from "../modal/SortModal";
import FilterModal from "../modal/FilterModal";
import { SortState } from "../../hooks/useSortAndFilter";

interface TableHeaderProps {
  sort: SortState;
  handleSort: (option: string, sortType: string) => void;
  handleResetSort: () => void;
  handleFilter: (priorityFilter: string | null) => void;
  activePriority: string | null;
}

export default function TableHeader(props: TableHeaderProps) {
  const { sort, handleSort, handleResetSort, handleFilter, activePriority } =
    props;
  return (
    <header className="p-5 flex justify-between">
      <h1 className="text-lg font-medium">All tickets</h1>
      <div className="flex justify-center space-x-5 text-slate-500 text-sm font-medium">
        <SortModal
          sortBy={sort}
          onSort={handleSort}
          onResetSort={handleResetSort}
        />
        <FilterModal onFilter={handleFilter} activePriority={activePriority} />
      </div>
    </header>
  );
}
