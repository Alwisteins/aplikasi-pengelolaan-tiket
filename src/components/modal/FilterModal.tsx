import { useState } from "react";

const priorityFilter = ["high", "normal", "low"];

export default function FilterModal({
  onFilter,
  activePriority
}: {
  onFilter: (priorityFilter: string | null) => void;
  activePriority: string | null;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <div>
      <div className={`${open ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <form className="relative px-5 py-8 rounded-md space-y-5 bg-white">
            <button
              type="button"
              onClick={(event) => handleClose(event)}
              className="font-bold text-xl absolute right-5 top-5"
            >
              x
            </button>
            <h1 className="text-center text-lg font-semibold">
              Filter by priority
            </h1>
            <div className="flex justify-center">
              {priorityFilter.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`${
                    activePriority === name
                      ? "bg-green-200 border-green-400"
                      : "bg-slate-100 border-slate-300"
                  } border py-1 px-4 mx-2 rounded-lg`}
                  onClick={() => onFilter(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => onFilter(null)}
                className="py-2 px-3 text-slate-200 rounded-lg bg-blue-700"
              >
                Reset Filter
              </button>
            </div>
          </form>
        </div>
      </div>
      <button type="button" onClick={() => setOpen(true)}>
        Filter
      </button>
    </div>
  );
}
