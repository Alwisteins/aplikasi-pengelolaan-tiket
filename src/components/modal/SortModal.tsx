import { useState } from "react";

const sortOptions = {
  name: ["a-z", "z-a"],
  date: ["newest", "oldest"],
  priority: ["highest", "lowest"],
};

interface SortModalProps {
  onResetSort: () => void;
  onSort: (option: string, setType: string) => void;
  sortBy: {
    name: string | null;
    date: string | null;
    priority: string | null;
  };
}

export default function SortModal(props: SortModalProps) {
  const { onResetSort, onSort, sortBy } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={`${open ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <form className="relative px-5 py-8 rounded-md space-y-5 bg-white">
            <button
              type="button"
              className="font-bold text-xl absolute top-5 right-5"
              onClick={() => setOpen(false)}
            >
              x
            </button>
            <div className="space-y-3 px-10">
              {Object.entries(sortOptions).map(([sortType, options]) => (
                <div key={sortType} className="space-y-2">
                  <h1 className="text-center">sort by {sortType}</h1>
                  <div className="flex space-x-2 justify-between">
                    {options.map((option) => (
                      <button
                        type="button"
                        key={option}
                        className={`${
                          sortBy[sortType as keyof typeof sortBy] === option
                            ? "bg-green-200 border-green-400"
                            : "bg-slate-100 border-slate-300"
                        }  px-4 py-1 rounded-lg border`}
                        onClick={() => onSort(option, sortType)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-3 py-2 text-slate-200 rounded-lg bg-blue-700"
                onClick={onResetSort}
              >
                Reset filter
              </button>
            </div>
          </form>
        </div>
      </div>
      <button type="button" onClick={() => setOpen(true)}>
        Sort
      </button>
    </div>
  );
}
