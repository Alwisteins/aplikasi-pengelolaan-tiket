import { useState } from "react";
import Button from "../button/Button";
import OptionButton from "../button/OptionButton";

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
                      <OptionButton
                        name={option}
                        active={sortBy[sortType as keyof typeof sortBy]}
                        onClick={() => onSort(option, sortType)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button type="button" name="Reset sort" onClick={onResetSort} />
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
