import { useState } from "react";
import Button from "../button/Button";
import OptionButton from "../button/OptionButton";

const priorityFilter = ["high", "normal", "low"];

interface FilterModalProps {
  onFilter: (priorityFilter: string | null) => void;
  activePriority: string | null;
}

export default function FilterModal(props: FilterModalProps) {
  const { onFilter, activePriority } = props;
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
                <OptionButton
                  name={name}
                  active={activePriority}
                  onClick={onFilter}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                type="button"
                name="Reset filter"
                onClick={() => onFilter(null)}
              />
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
