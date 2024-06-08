const ticketPriorityStyle = (priority: string): string => {
  switch (priority) {
    case "high":
      return `bg-red-400 text-white`;
    case "normal":
      return `bg-green-400 text-white`;
    default:
      return `bg-yellow-400 text-white`;
  }
};

export default ticketPriorityStyle;
