// eslint-disable-next-line react-refresh/only-export-components
const taskStatusStyle = (taskStatus: string): string => {
  switch (taskStatus) {
    case "urgent":
      return `bg-yellow-500 text-white`;
    case "new":
      return `bg-green-500 text-white`;
    default:
      return `bg-slate-200 text-slate-400`;
  }
};

export default taskStatusStyle;
