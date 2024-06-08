import { ChangeEvent, useState } from "react";
import { Tickets } from "../pages/tickets/Tickets";

export interface SortState {
  name: string | null;
  date: string | null;
  priority: string | null;
}

export const useSortAndFilter = (tickets: Tickets | null) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activePriority, setActivePriority] = useState<string | null>(null);
  const [sort, setSort] = useState<SortState>({
    name: null,
    date: null,
    priority: null,
  });

  const handleRowsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleFilter = (priorityFilter: string | null) => {
    setActivePriority(priorityFilter);
    setCurrentPage(1);
  };

  const handleResetSort = () => {
    setSort({
      name: null,
      date: null,
      priority: null,
    });
  };

  const handleSort = (option: string, sortType: string) => {
    handleResetSort();
    setSort((prevSort) => ({
      ...prevSort,
      [sortType]: option,
    }));
    setCurrentPage(1);
  };

  let filteredTickets = tickets;

  if (activePriority) {
    filteredTickets =
      tickets?.filter((ticket) => ticket.ticketPriority == activePriority) ||
      tickets;
  }

  const sortedTickets = [...(filteredTickets || [])].sort((a, b) => {
    if (sort.name) {
      return sort.name === "a-z"
        ? a.ticketName.localeCompare(b.ticketName)
        : b.ticketName.localeCompare(a.ticketName);
    }
    if (sort.date) {
      const dateA = new Date(a.ticketDate).getTime();
      const dateB = new Date(b.ticketDate).getTime();
      return sort.date === "newest" ? dateA - dateB : dateB - dateA;
    }
    if (sort.priority) {
      const priorityOrder = ["low", "normal", "high"];
      const priorityA = priorityOrder.indexOf(a.ticketPriority);
      const priorityB = priorityOrder.indexOf(b.ticketPriority);
      return sort.priority === "highest"
        ? priorityB - priorityA
        : priorityA - priorityB;
    }
    return 0;
  });

  return {
    rowsPerPage,
    currentPage,
    setCurrentPage,
    activePriority,
    sort,
    handleRowsPerPageChange,
    handleFilter,
    handleSort,
    handleResetSort,
    sortedTickets,
  };
};
