import { format, formatDistanceToNow } from "date-fns";

const formatDateDistance = (dateString: string) => {
  const date = new Date(dateString);
  return `updated ${formatDistanceToNow(date, { addSuffix: true })}`;
};

const formatDateOn = (dateString: string) => {
  const date = new Date(dateString);
  return `on ${format(date, "dd.MM.yyyy")}`;
};

const formatDateTicket = (dateString: string) => {
  const date = new Date(dateString);
  return `${format(date, "MMM dd, yy")}`;
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "hh:mm a");
};

const date = {
  formatDateDistance,
  formatDateOn,
  formatDateTicket,
  formatTime,
};

export default date;
