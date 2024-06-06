interface OptionButtonProps {
  name: string;
  active: string | null;
  onClick: (name: string | null) => void;
}

export default function OptionButton(props: OptionButtonProps) {
  const { name, active, onClick } = props;
  return (
    <button
      key={name}
      type="button"
      className={`${
        active === name
          ? "bg-green-200 border-green-400"
          : "bg-slate-100 border-slate-300"
      } border py-1 px-4 mx-2 rounded-lg`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
